package com.example.demo.chat;

import com.example.demo.member.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest")
public class ChatSendController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/sendChatting")
    public ResponseEntity<ChatSendResponse> sendChatMessage(@RequestBody Chat chat) {
        // 요청 검증
        if (chat.getRoomId() <= 0 || chat.getSenderId() <= 0 ||
                chat.getMessage() == null || chat.getMessage().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(new ChatSendResponse("failed"));
        }

        // 서비스 호출
        String result = memberService.sendChatMessage(chat.getRoomId(), chat.getSenderId(), chat.getMessage());
        return ResponseEntity.ok(new ChatSendResponse(result));
    }

    // 응답 DTO
    static class ChatSendResponse {
        private String result;

        public ChatSendResponse(String result) {
            this.result = result;
        }

        public String getResult() {
            return result;
        }
    }
}
