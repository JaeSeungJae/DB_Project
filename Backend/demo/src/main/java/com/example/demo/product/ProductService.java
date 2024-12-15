package com.example.demo.product;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // 상품 등록 메서드
    public String registerProduct(ProductRegisterController.ProductRequest request) {
        // 중복 상품 확인
        String checkSql = "SELECT COUNT(*) FROM product WHERE product_name = ? AND product_model_name = ?";
        int count = jdbcTemplate.queryForObject(checkSql, Integer.class, request.getProduct_name(), request.getProduct_model_name());

        if (count > 0) {
            return "failed: duplicate product name and model";
        }

        // 상품 등록 SQL 수정
        String sql = "INSERT INTO product (product_name, product_model_name, product_brand, product_category, " +
                     "product_price, product_description, seller_id, seller_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, request.getProduct_name(), request.getProduct_model_name(),
                request.getProduct_brand(), request.getProduct_category(), request.getProduct_price(),
                request.getProduct_description(), request.getSeller_id(), request.getSeller_name());

        return "success";
    }


    // 특정 상품 조회 메서드
    public Product getProductById(int productId) {
        String sql = "SELECT product_name, seller_name, product_price, product_image, " +
                "product_description, product_model_name, seller_id " +
                "FROM product WHERE uid = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{productId}, (rs, rowNum) -> {
            Product product = new Product();
            product.setProduct_name(rs.getString("product_name"));
            product.setSeller_name(rs.getString("seller_name"));
            product.setProduct_price(rs.getDouble("product_price"));
            product.setProduct_image(rs.getString("product_image"));
            product.setProduct_description(rs.getString("product_description"));
            product.setProduct_model_name(rs.getString("product_model_name"));
            product.setSeller_id(rs.getString("seller_id"));
            return product;
        });
    }



    // 특정 판매자 판매글 불러오는 메서드
    public Product[] getSellList(String sellerId) {
    	String sql = "SELECT uid, name, price, status FROM product WHERE seller_id = ?";

        List<Product> productList = jdbcTemplate.query(sql, new Object[]{sellerId}, (rs, rowNum) -> {
            Product product = new Product();
            product.setUid(rs.getInt("uid"));
            product.setProduct_name(rs.getString("name"));
            product.setProduct_price(rs.getInt("price"));
            product.setStatus(rs.getString("status"));
            product.setSeller_id(sellerId);
            return product;
        });

        return productList.toArray(new Product[0]);
    }

}
