package com.example.demo.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest")
public class LoginController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        System.out.println("Received id : " + request.getId());
        System.out.println("Received pw : " + request.getPw());
        String result = memberService.login(request.getId(), request.getPw());
        return new LoginResponse(result);
    }
}

class LoginRequest {
    private String id;
    private String pw;

    // Getter and Setter
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
}

class LoginResponse {
    private String result;

    public LoginResponse(String result) {
        this.result = result;
    }

    // Getter
    public String getResult() {
        return result;
    }
}