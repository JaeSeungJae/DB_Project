package com.example.demo.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/rest")
public class GetProductController {

    @Autowired
    private ProductService productService;

    // 상품 조회 API
    @PostMapping("/getProduct")
    public ResponseEntity<?> getProduct(@RequestBody Map<String, Object> request) {
        try {
            int productId = (Integer) request.get("product_id");
            Product product = productService.getProductById(productId);
            return ResponseEntity.ok(new ProductResponse(product));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("result", "failed", "message", e.getMessage()));
        }
    }

    // ProductResponse DTO
    static class ProductResponse {
        private String product_name;
        private String seller_name;
        private double product_price;
        private String product_image;
        private String product_description;
        private String product_model_name;
        private String seller_id;

        public ProductResponse(Product product) {
            this.product_name = product.getProduct_name();
            this.seller_name = product.getSeller_name();
            this.product_price = product.getProduct_price();
            this.product_image = product.getProduct_image();
            this.product_description = product.getProduct_description();
            this.product_model_name = product.getProduct_model_name();
            this.seller_id = product.getSeller_id();
        }

        public String getProduct_name() { return product_name; }
        public String getSeller_name() { return seller_name; }
        public double getProduct_price() { return product_price; }
        public String getProduct_image() { return product_image; }
        public String getProduct_description() { return product_description; }
        public String getProduct_model_name() { return product_model_name; }
        public String getSeller_id() { return seller_id; }
    }
}
