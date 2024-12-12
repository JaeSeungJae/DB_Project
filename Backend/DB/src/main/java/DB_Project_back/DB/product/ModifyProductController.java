package DB_Project_back.DB.product;

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
    public ResponseEntity<Map<String, Object>> modifyProduct(@RequestBody ModifyProductRequest request) {
        Map<String, Object> response = new HashMap<>();

        // 필수 필드 검증
        if (request.getUid() == null || request.getProduct_price() == null || request.getProduct_description() == null) {
            response.put("result", "failed");
            response.put("message", "All fields are required.");
            return ResponseEntity.badRequest().body(response);
        }

        try {
            // 상품 가격과 설명 수정 쿼리 (가격이랑 설명만 수정할 수 있게 일단 세팅)
            String sql = "UPDATE product SET price = ?, description = ? WHERE uid = ?";
            int rows = jdbcTemplate.update(sql, request.getProduct_price(), request.getProduct_description(), request.getUid());

            // 결과 처리
            if (rows > 0) {
                response.put("result", "success");
            } else {
                response.put("result", "failed");
                response.put("message", "Product not found.");
            }
        } catch (Exception e) {
            response.put("result", "failed");
            response.put("message", "Error updating product: " + e.getMessage());
        }

        return ResponseEntity.ok(response);
    }

    // 요청 데이터 클래스 (uid로 구분하도록 세팅함)
    static class ModifyProductRequest {
        private Integer uid; // 상품 UID
        private Double product_price; // 수정할 상품 가격
        private String product_description; // 수정할 상품 설명

        // Getters and Setters
        public Integer getUid() {
            return uid;
        }

        public void setUid(Integer uid) {
            this.uid = uid;
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
