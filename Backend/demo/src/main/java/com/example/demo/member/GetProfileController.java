package com.example.demo.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class GetProfileController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/getProfile")
    public ResponseEntity<?> getProfile(@RequestBody Map<String, String> request) {
        Map<String, Object> response = new HashMap<>();
        String id = request.get("id");

        // id가 비어있을 경우 실패 반환
        if (id == null || id.isEmpty()) {
            response.put("result", "failed");
            response.put("message", "ID is required.");
            return ResponseEntity.badRequest().body(response);
        }

        // 회원 정보 조회
        Member member = memberService.getProfileById(id);
        if (member != null) {
            response.put("data", new MemberProfileResponse(member));
            response.put("result", "success");
        } else {
            response.put("result", "failed");
            response.put("message", "Member not found.");
        }

        return ResponseEntity.ok(response);
    }

    // DTO 클래스
    static class MemberProfileResponse {
        private String id;
        private String nickname;
        private int mileage;
        private int amount;
        private String name;

        public MemberProfileResponse(Member member) {
            this.id = member.getId();
            this.nickname = member.getNickname();
            this.mileage = member.getMileage();
            this.amount = member.getAmount();
            this.name = member.getFname() + " " + member.getLname();
        }

        // Getters
        public String getId() { return id; }
        public String getNickname() { return nickname; }
        public int getMileage() { return mileage; }
        public int getAmount() { return amount; }
        public String getName() { return name; }
    }
}