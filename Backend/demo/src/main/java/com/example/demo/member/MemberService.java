package com.example.demo.member;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.demo.chat.Chat;

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

        String sql = "INSERT INTO member (id, pw, fname, lname, nickname) VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, member.getId(), member.getPw(), member.getFname(),
                member.getLname(), member.getNickname());
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
                member.setLevel(rs.getInt("level"));
                member.setAmount(rs.getInt("amount"));
                return member;
            }, id);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    // 채팅방 정보 조회 메서드
    public Chat[] getChatMessagesByRoomId(int roomId) {
        String sql = "SELECT message_id, room_id, sender_id, message, sent_at FROM chat_message WHERE room_id = ? ORDER BY sent_at ASC";

        List<Chat> messages = jdbcTemplate.query(sql, new Object[]{roomId}, (rs, rowNum) -> {
            Chat chat = new Chat();
            chat.setMessageId(rs.getInt("message_id"));
            chat.setRoomId(rs.getInt("room_id"));
            chat.setSenderId(rs.getInt("sender_id"));
            chat.setMessage(rs.getString("message"));
            chat.setSentAt(rs.getTimestamp("sent_at").toString());
            return chat;
        });

        return messages.toArray(new Chat[0]);
    }

    // 채팅 전송 메서드
    public String sendChatMessage(int chatId, int senderId, String chatContent) {
        String sql = "INSERT INTO chat_message (room_id, sender_id, message, sent_at) " +
                "VALUES (?, ?, ?, NOW())";

        try {
            int rows = jdbcTemplate.update(sql, chatId, senderId, chatContent);

            if (rows > 0) {
                return "success";
            } else {
                return "failed";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "failed";
        }
    }

    // 마일리지, 잔액 조회 메서드
    public Member getUserAmountAndMileage(String userId) {
        String sql = "SELECT amount, mileage FROM member WHERE id = ?";

        try {
            return jdbcTemplate.queryForObject(
                    sql,
                    new Object[]{userId},
                    (rs, rowNum) -> {
                        Member member = new Member();
                        member.setAmount(rs.getInt("amount"));
                        member.setMileage(rs.getInt("mileage"));
                        return member;
                    }
            );
        } catch (Exception e) {
            e.printStackTrace();
            return null; // 데이터가 없거나 에러 발생 시
        }
    }

    // ** 메서드 추가 구련 할 때, 인자 직접 전달하는 방식으로해야 경고 안뜨더라 ..! **
}