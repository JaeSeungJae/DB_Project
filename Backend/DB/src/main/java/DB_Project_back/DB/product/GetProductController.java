package DB_Project_back.DB.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class GetProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/getProduct")
    public ResponseEntity<?> getProduct(@RequestBody Map<String, Object> request) {
        Map<String, Object> response = new HashMap<>();
        try {
            int uid = Integer.parseInt(request.get("uid").toString());

            // 서비스 레이어에서 상품 조회
            Product product = productService.getProductByUid(uid);

            if (product != null) {
                response.put("result", "success");
                response.put("data", new ProductResponse(product));
            } else {
                response.put("result", "failed");
                response.put("message", "Product not found");
            }
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("result", "failed");
            response.put("message", "Invalid input data");
            return ResponseEntity.badRequest().body(response);
        }
    }

    // Response DTO 클래스
    static class ProductResponse {
        private int uid;
        private String name;
        private String model_name;
        private String brand;
        private String category;
        private int price;
        private String description;

        public ProductResponse(Product product) {
            this.uid = product.getUid();
            this.name = product.getName();
            this.model_name = product.getModel_name();
            this.brand = product.getBrand();
            this.category = product.getCategory();
            this.price = product.getPrice();
            this.description = product.getDescription();
        }

        // Getters
        public int getUid() { return uid; }
        public String getName() { return name; }
        public String getModel_name() { return model_name; }
        public String getBrand() { return brand; }
        public String getCategory() { return category; }
        public int getPrice() { return price; }
        public String getDescription() { return description; }
    }
}
