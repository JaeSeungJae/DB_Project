package com.example.demo.review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    // 리뷰 작성 API
    @PostMapping("/postReview")
    public ResponseEntity<?> postReview(@RequestBody Review review) {
        try {
            reviewService.addReview(review);
            // Map을 사용해서 JSON 형식 반환
            return ResponseEntity.ok(Map.of("result", "success"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("result", "failed", "message", e.getMessage()));
        }
    }


    // 특정 판매자의 리뷰 조회 API
    @PostMapping("/getReviews")
    public ResponseEntity<?> getReviews(@RequestBody Review review) {
        try {
            String sellerId = review.getSellerId();  // JSON에서 전달된 값 추출
            List<Review> reviews = reviewService.getReviewsBySeller(sellerId);
            return ResponseEntity.ok().body(reviews);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"result\": \"failed\", \"message\": \"" + e.getMessage() + "\"}");
        }
    }

}