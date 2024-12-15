package com.example.demo.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class ChargeAccountController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/chargeAccount")
    public ResponseEntity<?> chargeAccount(@RequestBody ChargeRequest request) {
        Map<String, String> response = new HashMap<>();

        // amount 값 검증: 필수, 양수여야 함
        if (request.getAmount() == null || request.getAmount() <= 0) {
            response.put("result", "failed");
            return ResponseEntity.badRequest().body(response);
        }

        // 서비스 로직 호출
        String result = memberService.chargeAccount(request.getId(), request.getAmount());
        response.put("result", result);

        return ResponseEntity.ok(response);
    }

    // 요청 DTO 클래스
    static class ChargeRequest {
        private String id;
        private Integer amount;

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public Integer getAmount() {
            return amount;
        }

        public void setAmount(Integer amount) {
            this.amount = amount;
        }
    }
}