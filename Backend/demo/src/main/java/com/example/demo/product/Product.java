package com.example.demo.product;

public class Product {
    private int uid;
    private String product_name;
    private String product_model_name;
    private String product_brand;
    private String product_category;
    private double product_price;
    private String product_description;
    private String product_image;
    private String status;
    private String seller_id;
    private String seller_name;

    // Getters and Setters
    public int getUid() { return uid; }
    public void setUid(int uid) { this.uid = uid; }

    public String getProduct_name() { return product_name; }
    public void setProduct_name(String product_name) { this.product_name = product_name; }

    public String getProduct_model_name() { return product_model_name; }
    public void setProduct_model_name(String product_model_name) { this.product_model_name = product_model_name; }

    public String getProduct_brand() { return product_brand; }
    public void setProduct_brand(String product_brand) { this.product_brand = product_brand; }

    public String getProduct_category() { return product_category; }
    public void setProduct_category(String product_category) { this.product_category = product_category; }

    public double getProduct_price() { return product_price; }
    public void setProduct_price(double product_price) { this.product_price = product_price; }

    public String getProduct_description() { return product_description; }
    public void setProduct_description(String product_description) { this.product_description = product_description; }

    public String getProduct_image() { return product_image; }
    public void setProduct_image(String product_image) { this.product_image = product_image; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getSeller_id() { return seller_id; }
    public void setSeller_id(String seller_id) { this.seller_id = seller_id; }

    public String getSeller_name() { return seller_name; }
    public void setSeller_name(String seller_name) { this.seller_name = seller_name; }
}
