package DB_Project_back.DB.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.dao.EmptyResultDataAccessException;

@Service
public class MemberService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // 로그인 메서드
    public String login(String id, String pw) {
        String sql = "SELECT COUNT(*) FROM member WHERE id = ? AND pw = ?";
        int count = jdbcTemplate.queryForObject(sql, Integer.class, id, pw);
        return count > 0 ? "success" : "failed";
    }

    // 회원 가입 메서드
    public String registerMember(Member member) {
        String checkSql = "SELECT COUNT(*) FROM member WHERE id = ?";
        int count = jdbcTemplate.queryForObject(checkSql, Integer.class, member.getId());

        if (count > 0) {
            return "failed: duplicate id";
        }

        String sql = "INSERT INTO member (id, pw, fname, lname, nickname, birth_date, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, member.getId(), member.getPw(), member.getFname(), 
                            member.getLname(), member.getNickname(), member.getBirth_date(), 
                            member.getEmail(), 1, 0);
        return "success";
    }

    // 회원 정보 수정 메서드
    public String modifyProfile(String id, String pw, String nickname) {
        String sql = "UPDATE member SET pw = ?, nickname = ? WHERE id = ?";
        int rows = jdbcTemplate.update(sql, pw, nickname, id);
        return rows > 0 ? "success" : "failed";
    }

    // 회원 탈퇴 메서드
    public String removeMember(String id) {
        String sql = "DELETE FROM member WHERE id = ?";
        int rows = jdbcTemplate.update(sql, id);
        return rows > 0 ? "success" : "failed";
    }

    // 잔액 충전 메서드
    public String chargeAccount(String id, int chargeAmount) {
        String sql = "UPDATE member SET amount = amount + ? WHERE id = ?";
        int rows = jdbcTemplate.update(sql, chargeAmount, id);
        return rows > 0 ? "success" : "failed";
    }

    // ID로 특정 회원 프로필 조회 메서드
    public Member getProfileById(String id) {
        String sql = "SELECT * FROM member WHERE id = ?";
        try {
            return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
                Member member = new Member();
                member.setUid(rs.getInt("uid"));
                member.setId(rs.getString("id"));
                member.setPw(rs.getString("pw"));
                member.setFname(rs.getString("fname"));
                member.setLname(rs.getString("lname"));
                member.setNickname(rs.getString("nickname"));
                member.setBirth_date(rs.getString("birth_date"));
                member.setEmail(rs.getString("email"));
                member.setLevel(rs.getInt("level"));
                member.setAmount(rs.getInt("amount"));
                return member;
            }, id);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }
    
    // ** 메서드 추가 구련 할 때, 인자 직접 전달하는 방식으로해야 경고 안뜨더라 ..! **
}
