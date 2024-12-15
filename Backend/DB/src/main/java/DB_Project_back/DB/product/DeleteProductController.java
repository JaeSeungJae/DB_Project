package DB_Project_back.DB.product;

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

    @PostMapping("/deleteProduct")
    public ResponseEntity<Map<String, Object>> deleteProduct(@RequestBody DeleteProductRequest request) {
        Map<String, Object> response = new HashMap<>();

        // 필수 필드 검증
        if (request.getUid() == null) {
            response.put("result", "failed");
            response.put("message", "Product UID is required.");
            return ResponseEntity.badRequest().body(response);
        }

        try {
            // 상품 삭제 쿼리 (마찬가지로 uid로 처리하도록 설정함)
            String sql = "DELETE FROM product WHERE uid = ?";
            int rows = jdbcTemplate.update(sql, request.getUid());

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
        private Integer uid; // 삭제할 상품의 UID

        // Getter and Setter
        public Integer getUid() {
            return uid;
        }

        public void setUid(Integer uid) {
            this.uid = uid;
        }
    }
}
