package com.example.demo.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class ModifyProductController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/modifyProduct")
    public ResponseEntity<Map<String, String>> modifyProduct(@RequestBody ModifyProductRequest request) {
        Map<String, String> response = new HashMap<>();

        // 필수 필드 검증
        if (request.getProduct_id() == null || request.getProduct_price() == null || request.getProduct_description() == null) {
            response.put("result", "failed");
            return ResponseEntity.badRequest().body(response);
        }

        try {
            // 상품 가격과 설명 수정 쿼리
            String sql = "UPDATE product SET product_price = ?, product_description = ? WHERE uid = ?";
            int rows = jdbcTemplate.update(sql, request.getProduct_price(), request.getProduct_description(), request.getProduct_id());

            // 결과 처리
            if (rows > 0) {
                response.put("result", "success");
            } else {
                response.put("result", "failed");
            }
        } catch (Exception e) {
            response.put("result", "failed");
        }

        return ResponseEntity.ok(response);
    }

    // 요청 데이터 클래스
    static class ModifyProductRequest {
        private Integer product_id; // 상품 ID
        private Double product_price; // 수정할 상품 가격
        private String product_description; // 수정할 상품 설명

        // Getters and Setters
        public Integer getProduct_id() {
            return product_id;
        }

        public void setProduct_id(Integer product_id) {
            this.product_id = product_id;
        }

        public Double getProduct_price() {
            return product_price;
        }

        public void setProduct_price(Double product_price) {
            this.product_price = product_price;
        }

        public String getProduct_description() {
            return product_description;
        }

        public void setProduct_description(String product_description) {
            this.product_description = product_description;
        }
    }
}
