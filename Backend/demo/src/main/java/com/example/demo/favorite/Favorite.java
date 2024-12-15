package com.example.demo.favorite;

public class Favorite {
    private String userId;    // 사용자 ID
    private int productUid;   // 관심 상품 UID

    // 기본 생성자
    public Favorite() {}

    // 매개변수 있는 생성자
    public Favorite(String userId, int productUid) {
        this.userId = userId;
        this.productUid = productUid;
    }

    // Getter 및 Setter
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getProductUid() {
        return productUid;
    }

    public void setProductUid(int productUid) {
        this.productUid = productUid;
    }
}
