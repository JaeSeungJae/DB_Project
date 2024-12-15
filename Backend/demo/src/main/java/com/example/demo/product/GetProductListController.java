package com.example.demo.product;

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
        String sql = "SELECT uid AS product_id, product_name AS product_name, product_price AS product_price, " +
                "product_description AS product_description, product_category AS product_category, " +
                "'sample_image.jpg' AS product_image " +
                "FROM product";


        try {
            // 리스트로 전체 상품 리스트 조회
            List<Map<String, Object>> productList = jdbcTemplate.queryForList(sql);
            
            // 응답 데이터
            response.put("products", productList);
            response.put("result", "success");
        } catch (Exception e) {
            // 에러 처리
            response.put("result", "failed");
            response.put("message", "Error retrieving product list: " + e.getMessage());
        }

        return ResponseEntity.ok(response);
    }
    
    @Autowired
    private ProductService productService;
    
    // 특정 유저 판매글 조회
    @PostMapping("/getSellList")
    public ResponseEntity<?> getSellList(@RequestBody Map<String, String> request) {
        Map<String, Object> response = new HashMap<>();
        try {
            String sellerId = request.get("sellerId");
            if (sellerId == null || sellerId.isEmpty()) {
                response.put("result", "failed");
                response.put("message", "Invalid seller ID");
                return ResponseEntity.badRequest().body(response);
            }

            Product[] products = productService.getSellList(sellerId);
            response.put("result", "success");
            response.put("data", products);
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("result", "failed");
            response.put("message", "Error retrieving sell list: " + e.getMessage());
            return ResponseEntity.status(500).body(response);
        }
    }

}
