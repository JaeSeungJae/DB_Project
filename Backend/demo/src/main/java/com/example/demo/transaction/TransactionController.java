package com.example.demo.transaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PostMapping("/purchaseProduct")
    public ResponseEntity<TransactionResponse> purchaseProduct(@RequestBody TransactionRequest request) {
        boolean result = transactionService.processTransaction(
                request.getBuyerId(),
                request.getSellerId(),
                request.getProductUid(),
                request.getTransactionAmount(),
                request.getUsedMileage(),
                request.getShippingAddress()
        );

        if (result) {
            return ResponseEntity.ok(new TransactionResponse("success"));
        } else {
            return ResponseEntity.badRequest().body(new TransactionResponse("failed"));
        }
    }

    // 요청 DTO
    static class TransactionRequest {
        private String buyerId;
        private String sellerId;
        private int productUid;
        private int transactionAmount;
        private int usedMileage;
        private String shippingAddress;

        public String getBuyerId() { return buyerId; }
        public void setBuyerId(String buyerId) { this.buyerId = buyerId; }

        public String getSellerId() { return sellerId; }
        public void setSellerId(String sellerId) { this.sellerId = sellerId; }

        public int getProductUid() { return productUid; }
        public void setProductUid(int productUid) { this.productUid = productUid; }

        public int getTransactionAmount() { return transactionAmount; }
        public void setTransactionAmount(int transactionAmount) { this.transactionAmount = transactionAmount; }

        public int getUsedMileage() { return usedMileage; }
        public void setUsedMileage(int usedMileage) { this.usedMileage = usedMileage; }

        public String getShippingAddress() { return shippingAddress; }
        public void setShippingAddress(String shippingAddress) { this.shippingAddress = shippingAddress; }
    }

    // 응답 DTO
    static class TransactionResponse {
        private String result;

        public TransactionResponse(String result) {
            this.result = result;
        }

        public String getResult() { return result; }
    }
}
