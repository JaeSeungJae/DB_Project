package DB_Project_back.DB.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class GetProductListController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/getProductList")
    public ResponseEntity<Map<String, Object>> getProductList() {
        Map<String, Object> response = new HashMap<>();

        // 모든 상품 정보 조회
        String sql = "SELECT uid AS product_id, name AS product_name, price AS product_price, " +
                     "description AS product_description, category AS product_category, " +
                     "'sample_image.jpg' AS product_image " +  // 이미지 경로는 그냥 샘플로 넣어둔 것임
                     "FROM product";

        try {
            // 리스트로 전체 상품 리스트 조회
            List<Map<String, Object>> productList = jdbcTemplate.queryForList(sql);
            
            // 응답 데이터
            response.put("products", productList);
            response.put("result", "success");
        } catch (Exception e) {
            // 에러 처리는 여기서
            response.put("result", "failed");
            response.put("message", "Error retrieving product list: " + e.getMessage());
        }

        return ResponseEntity.ok(response);
    }
}
