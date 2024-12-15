package com.example.demo.transaction;

public class Transaction {
    private int uid;
    private int buyerId;
    private int sellerId;
    private int productId;
    private String shippingAddress;
    private String status;
    private double transactionAmount;

    // 기본 생성자
    public Transaction() {}

    // 모든 필드 포함 생성자
    public Transaction(int uid, int buyerId, int sellerId, int productId, String shippingAddress,
                       String status, double transactionAmount) {
        this.uid = uid;
        this.buyerId = buyerId;
        this.sellerId = sellerId;
        this.productId = productId;
        this.shippingAddress = shippingAddress;
        this.status = status;
        this.transactionAmount = transactionAmount;
    }

    // Getter 및 Setter
    public int getUid() { return uid; }
    public void setUid(int uid) { this.uid = uid; }

    public int getBuyerId() { return buyerId; }
    public void setBuyerId(int buyerId) { this.buyerId = buyerId; }

    public int getSellerId() { return sellerId; }
    public void setSellerId(int sellerId) { this.sellerId = sellerId; }

    public int getProductId() { return productId; }
    public void setProductId(int productId) { this.productId = productId; }

    public String getShippingAddress() { return shippingAddress; }
    public void setShippingAddress(String shippingAddress) { this.shippingAddress = shippingAddress; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public double getTransactionAmount() { return transactionAmount; }
    public void setTransactionAmount(double transactionAmount) { this.transactionAmount = transactionAmount; }
}