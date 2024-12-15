package DB_Project_back.DB.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest")
public class ModifyProfileController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/modifyProfile")
    public ResponseEntity<ModifyProfileResponse> modifyProfile(@RequestBody ModifyProfileRequest request) {
        String result = memberService.modifyProfile(request.getId(), request.getPw(), request.getNickname());
        return ResponseEntity.ok(new ModifyProfileResponse(result));
    }
}

class ModifyProfileRequest {
    private String id;
    private String pw;
    private String nickname;

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}

class ModifyProfileResponse {
    private String result;

    public ModifyProfileResponse(String result) {
        this.result = result;
    }

    // Getter
    public String getResult() {
        return result;
    }
}
