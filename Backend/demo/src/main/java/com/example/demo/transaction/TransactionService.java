package com.example.demo.transaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class TransactionService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // 거래 처리 메서드
    public boolean processTransaction(String buyerId, String sellerId, int productUid,
                                      int transactionAmount, int usedMileage, String shippingAddress) {
        try {
            // 1. 구매자 정보 조회
            String getUserSql = "SELECT uid, amount, mileage FROM member WHERE id = ?";
            Map<String, Object> buyerData = jdbcTemplate.queryForMap(getUserSql, buyerId);

            int buyerUid = (int) buyerData.get("uid");
            int buyerAmount = ((Number) buyerData.get("amount")).intValue();
            int buyerMileage = ((Number) buyerData.get("mileage")).intValue();

            // 2. 잔액 및 마일리지 검증
            if (transactionAmount > buyerAmount || usedMileage > buyerMileage) {
                System.out.println("잔액 또는 마일리지가 부족합니다.");
                return false;
            }

            // 3. 판매자 UID 조회
            String getSellerUidSql = "SELECT uid FROM member WHERE id = ?";
            Integer sellerUid = jdbcTemplate.queryForObject(getSellerUidSql, new Object[]{sellerId}, Integer.class);

            if (sellerUid == null) {
                System.out.println("판매자 정보가 존재하지 않습니다.");
                return false;
            }

            // 4. 사용자 잔액과 마일리지 차감
            String updateBuyerSql = "UPDATE member SET amount = amount - ?, mileage = mileage - ? WHERE uid = ?";
            jdbcTemplate.update(updateBuyerSql, transactionAmount, usedMileage, buyerUid);

            // 5. 판매자 잔액 증가
            String updateSellerSql = "UPDATE member SET amount = amount + ? WHERE uid = ?";
            jdbcTemplate.update(updateSellerSql, transactionAmount, sellerUid);

            // 6. 상품 상태 '판매완료'로 업데이트
            String updateProductSql = "UPDATE product SET status = '판매완료' WHERE uid = ?";
            jdbcTemplate.update(updateProductSql, productUid);

            // 7. 거래 내용 추가
            String insertTransactionSql = "INSERT INTO transaction (buyer_id, seller_id, product_id, shipping_address, status, transaction_amount) " +
                    "VALUES (?, ?, ?, ?, '거래완료', ?)";
            jdbcTemplate.update(insertTransactionSql, buyerUid, sellerUid, productUid, shippingAddress, transactionAmount);

            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
