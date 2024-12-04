package DB_Project_back.DB.member;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uid;

    @Column(unique = true, nullable = false)
    private String id;

    @Column(nullable = false)
    private String pw;

    private String Fname;
    private String Lname;
    private String nickname;

    @Transient
    private String name;

    private int level;
}
