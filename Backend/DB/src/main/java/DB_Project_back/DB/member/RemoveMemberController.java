package DB_Project_back.DB.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest")
public class RemoveMemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/removeMember")
    public ResponseEntity<RemoveMemberResponse> removeMember(@RequestBody RemoveMemberRequest request) {
        // 서비스 메서드 호출
        String result = memberService.removeMember(request.getId());

        // 결과 반환
        return ResponseEntity.ok(new RemoveMemberResponse(result));
    }

    // 요청 DTO 클래스
    static class RemoveMemberRequest {
        private String id;

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }
    }

    // 응답 DTO 클래스
    static class RemoveMemberResponse {
        private String result;

        public RemoveMemberResponse(String result) {
            this.result = result;
        }

        public String getResult() {
            return result;
        }
    }
}
