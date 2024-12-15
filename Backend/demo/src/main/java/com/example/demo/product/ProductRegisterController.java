package com.example.demo.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class ProductRegisterController {

    @Autowired
    private ProductService productService;

    @PostMapping("/uploadProduct")
    public ResponseEntity<?> uploadProduct(@RequestBody ProductRequest request) {
        Map<String, String> response = new HashMap<>();

        // 입력값 검증
        if (request.getProduct_name() == null || request.getProduct_name().isEmpty() ||
            request.getProduct_price() == null ||
            request.getSeller_id() == null || request.getSeller_id().isEmpty() ||
            request.getSeller_name() == null || request.getSeller_name().isEmpty()) {

            response.put("result", "failed");
            return ResponseEntity.badRequest().body(response);
        }

        // 서비스 로직 호출
        String result = productService.registerProduct(request);
        response.put("result", result);

        return ResponseEntity.ok(response);
    }

    // 요청 DTO 클래스
    static class ProductRequest {
        private String product_name;
        private String product_model_name;
        private String product_brand;
        private String product_category;
        private Double product_price;
        private String product_description;
        private String seller_id;
        private String seller_name;

        // Getters and Setters
        public String getProduct_name() { return product_name; }
        public void setProduct_name(String product_name) { this.product_name = product_name; }

        public String getProduct_model_name() { return product_model_name; }
        public void setProduct_model_name(String product_model_name) { this.product_model_name = product_model_name; }

        public String getProduct_brand() { return product_brand; }
        public void setProduct_brand(String product_brand) { this.product_brand = product_brand; }

        public String getProduct_category() { return product_category; }
        public void setProduct_category(String product_category) { this.product_category = product_category; }

        public Double getProduct_price() { return product_price; }
        public void setProduct_price(Double product_price) { this.product_price = product_price; }

        public String getProduct_description() { return product_description; }
        public void setProduct_description(String product_description) { this.product_description = product_description; }

        public String getSeller_id() { return seller_id; }
        public void setSeller_id(String seller_id) { this.seller_id = seller_id; }

        public String getSeller_name() { return seller_name; }
        public void setSeller_name(String seller_name) { this.seller_name = seller_name; }
    }
}
