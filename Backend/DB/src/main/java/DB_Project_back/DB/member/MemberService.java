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
}
