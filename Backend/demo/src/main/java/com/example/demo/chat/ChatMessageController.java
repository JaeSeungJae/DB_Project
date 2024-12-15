package com.example.demo.chat;

import com.example.demo.member.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest")
public class ChatMessageController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/getMessages")
    public ResponseEntity<ChatMessagesResponse> getChatMessages(@RequestBody ChatMessageRequest request) {
        if (request.getRoomId() == null || request.getRoomId() <= 0) {
            return ResponseEntity.badRequest().body(new ChatMessagesResponse("failed", null));
        }

        Chat[] messages = memberService.getChatMessagesByRoomId(request.getRoomId());
        return ResponseEntity.ok(new ChatMessagesResponse("success", messages));
    }

    static class ChatMessageRequest {
        private Integer roomId;

        public Integer getRoomId() {
            return roomId;
        }

        public void setRoomId(Integer roomId) {
            this.roomId = roomId;
        }
    }

    static class ChatMessagesResponse {
        private String result;
        private Chat[] messages;

        public ChatMessagesResponse(String result, Chat[] messages) {
            this.result = result;
            this.messages = messages;
        }

        public String getResult() {
            return result;
        }

        public Chat[] getMessages() {
            return messages;
        }
    }

}
