package DB_Project_back.DB.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {
    Member findByIdAndPw(String id, String pw);
    boolean existsById(String id);
    Member findById(String id);	// 사용자 id로만 조회
}
