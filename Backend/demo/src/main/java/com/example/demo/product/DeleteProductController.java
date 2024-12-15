package com.example.demo.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class DeleteProductController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/removeProduct")
    public ResponseEntity<Map<String, Object>> deleteProduct(@RequestBody DeleteProductRequest request) {
        Map<String, Object> response = new HashMap<>();

        // 필수 필드 검증
        if (request.getProduct_id() == null) {
            response.put("result", "failed");
            response.put("message", "Product ID is required.");
            return ResponseEntity.badRequest().body(response);
        }

        try {
            // 상품 삭제 쿼리 (product_id를 사용)
            String sql = "DELETE FROM product WHERE uid = ?";
            int rows = jdbcTemplate.update(sql, request.getProduct_id());

            // 결과 처리
            if (rows > 0) {
                response.put("result", "success");
            } else {
                response.put("result", "failed");
                response.put("message", "Product not found.");
            }
        } catch (Exception e) {
            response.put("result", "failed");
            response.put("message", "Error deleting product: " + e.getMessage());
        }

        return ResponseEntity.ok(response);
    }

    // 요청 데이터 클래스
    static class DeleteProductRequest {
        private Integer product_id; // 수정: 삭제할 상품의 ID

        // Getter and Setter
        public Integer getProduct_id() {
            return product_id;
        }

        public void setProduct_id(Integer product_id) {
            this.product_id = product_id;
        }
    }
}
