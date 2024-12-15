package com.example.demo.favorite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    // 관심상품 추가 API
    @PostMapping("/addFavorite")
    public ResponseEntity<?> addFavoriteProduct(@RequestBody Favorite favorite) {
        boolean result = favoriteService.addFavoriteProduct(favorite);

        if (result) {
            return ResponseEntity.ok(Map.of("result", "success"));
        } else {
            return ResponseEntity.ok(Map.of("result", "failed", "message", "이미 등록된 상품입니다."));
        }
    }

    // 관심상품 조회 API
    @PostMapping("/getFavorite")
    public ResponseEntity<?> getFavoriteProducts(@RequestBody Map<String, String> request) {
        String userId = request.get("userId");

        List<Map<String, Object>> favoriteProducts = favoriteService.getFavoriteProducts(userId);

        if (favoriteProducts.isEmpty()) {
            return ResponseEntity.ok(Map.of("result", "empty", "data", favoriteProducts));
        } else {
            return ResponseEntity.ok(Map.of("result", "success", "data", favoriteProducts));
        }
    }
}
