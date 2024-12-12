package DB_Project_back.DB.product;

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

    @PostMapping("/registerProduct")
    public ResponseEntity<?> registerProduct(@RequestBody ProductRequest request) {
        Map<String, String> response = new HashMap<>();

        // 요청 값 검증
        if (request.getName() == null || request.getName().isEmpty() || request.getPrice() == null) {
            response.put("result", "failed");
            response.put("message", "Product name and price are required.");
            return ResponseEntity.badRequest().body(response);
        }

        // 서비스 로직 호출
        String result = productService.registerProduct(request);
        response.put("result", result);

        return ResponseEntity.ok(response);
    }

    // 요청 DTO 클래스
    static class ProductRequest {
        private String name;
        private String model_name;
        private String brand;
        private String category;
        private Integer price;
        private String description;

        // Getters and Setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getModel_name() { return model_name; }
        public void setModel_name(String model_name) { this.model_name = model_name; }

        public String getBrand() { return brand; }
        public void setBrand(String brand) { this.brand = brand; }

        public String getCategory() { return category; }
        public void setCategory(String category) { this.category = category; }

        public Integer getPrice() { return price; }
        public void setPrice(Integer price) { this.price = price; }

        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
    }
}
