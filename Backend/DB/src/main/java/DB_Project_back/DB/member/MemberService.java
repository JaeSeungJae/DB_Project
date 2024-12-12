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
    
    // 사용자 제거 메서드
    public String removeMember(String id) {
        // 사용자 id로 조회
        Member member = memberRepository.findById(id);
        if (member != null) { // 회원이 존재하면 삭제
            memberRepository.delete(member); // 조회된 엔티티를 삭제
            return "success";
        }
        return "failed"; // 회원이 존재하지 않는 경우
    }
    
    // 잔액 충전 메서드
    public String chargeAccount(String id, int chargeAmount) {
        Member member = memberRepository.findById(id);	// 회원 조회

        if (member != null) { // null 여부 확인
            member.setAmount(member.getAmount() + chargeAmount); // amount 필드 누적
            memberRepository.save(member);
            return "success";
        } else {
            return "failed"; // 해당 id의 회원이 없을 경우
        }
    }
    
    // 회원 찾기 메서드
    public Member getProfileById(String id) {
        // id가 존재하면 해당 회원 객체 반환
        return memberRepository.findById(id);
    }
}
