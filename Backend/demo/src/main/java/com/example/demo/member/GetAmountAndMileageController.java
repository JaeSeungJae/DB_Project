package com.example.demo.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class GetAmountAndMileageController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/getAmountAndMileage")
    public ResponseEntity<Map<String, Object>> getAmountAndMileage(@RequestBody UserIdRequest request) {
        // 입력 검증
        if (request == null || request.getUserId() == null || request.getUserId().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(null);
        }

        // 서비스 호출
        Member member = memberService.getUserAmountAndMileage(request.getUserId());

        if (member != null) {
            // 필요한 필드만 추출
            Map<String, Object> response = new HashMap<>();
            response.put("amount", member.getAmount());
            response.put("mileage", member.getMileage());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // 사용자 ID를 받기 위한 내부 클래스
    static class UserIdRequest {
        private String userId;

        public String getUserId() {
            return userId;
        }

        public void setUserId(String userId) {
            this.userId = userId;
        }
    }
}