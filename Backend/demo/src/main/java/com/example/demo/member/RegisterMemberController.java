package com.example.demo.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest")
public class RegisterMemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/registerMember")
    public ResponseEntity<RegisterResponse> registerMember(@RequestBody RegisterRequest request) {
        Member member = new Member();
        member.setId(request.getId());
        member.setPw(request.getPw());
        member.setFname(request.getFname());
        member.setLname(request.getLname());
        member.setNickname(request.getNickname());

        String result = memberService.registerMember(member);
        if ("success".equals(result)) {
            return ResponseEntity.ok(new RegisterResponse(result, member));
        } else {
            return ResponseEntity.badRequest().body(new RegisterResponse(result, null));
        }
    }
}


class RegisterRequest {
    private String id;
    private String pw;
    private String fname;
    private String lname;
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

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

}

class RegisterResponse {
    private String result;
    private Member member;

    public RegisterResponse(String result, Member member) {
        this.result = result;
        this.member = member;
    }

    // Getter
    public String getResult() {
        return result;
    }
    public Member getMember() {return member;}
}