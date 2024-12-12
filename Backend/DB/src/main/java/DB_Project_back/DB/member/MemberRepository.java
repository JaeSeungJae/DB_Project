package DB_Project_back.DB.member;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {
    Member findByIdAndPw(String id, String pw);
    boolean existsById(String id);
    Member findById(String id);	// 사용자 id로만 조회하는 메서드
    void deleteById(String id);	// 사용자 삭제 메서드
}
