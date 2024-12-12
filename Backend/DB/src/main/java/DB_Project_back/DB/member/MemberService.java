package DB_Project_back.DB.member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    public String login(String id, String pw) {
        Member member = memberRepository.findByIdAndPw(id, pw);
        if (member != null) {
            return "success";
        }
        return "failed";
    }
    public String registerMember(Member member) {
        // ID 중복 체크
        if (memberRepository.existsById(member.getId())) {
            return "failed: duplicate id";
        }

        // 데이터 저장
        member.setLevel(1);
        memberRepository.save(member);
        return "success";
    }
    
    // 프로필 수정 메서드
    public String modifyProfile(String id, String pw, String nickname) {
        // 유효성 확인
        if (id == null || id.isBlank() || pw == null || pw.isBlank() || nickname == null || nickname.isBlank()) {
            return "failed"; // id, pw, nickname 중 하나라도 빠져있으면 failed
        }

        // 입력값 전부 있을 시 : 사용자 조회
        Member member = memberRepository.findById(id);
        if (member != null) {
            member.setPw(pw);
            member.setNickname(nickname);
            memberRepository.save(member);
            return "success";
        }

        return "failed"; // 사용자가 존재하지 않는 경우 failed
    }
}
