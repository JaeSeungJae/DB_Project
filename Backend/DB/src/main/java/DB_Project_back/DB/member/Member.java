package DB_Project_back.DB.member;

public class Member {
    private int uid;
    private String id;
    private String pw;
    private String fname;
    private String lname;
    private String nickname;
    private String birth_date;
    private String email;
    private int level;
    private int amount;

    // Getter 메서드들
    public int getUid() { return uid; }
    public String getId() { return id; }
    public String getPw() { return pw; }
    public String getFname() { return fname; }
    public String getLname() { return lname; }
    public String getNickname() { return nickname; }
    public String getBirth_date() { return birth_date; }
    public String getEmail() { return email; }
    public int getLevel() { return level; }
    public int getAmount() { return amount; }
    
    // Setter 메서스들
    public void setUid(int uid) { this.uid = uid; }
    public void setId(String id) { this.id = id; }
    public void setPw(String pw) { this.pw = pw; }
    public void setFname(String fname) { this.fname = fname; }
    public void setLname(String lname) { this.lname = lname; }
    public void setNickname(String nickname) { this.nickname = nickname; }
    public void setBirth_date(String birth_date) { this.birth_date = birth_date; }
    public void setEmail(String email) { this.email = email; }
    public void setLevel(int level) { this.level = level; }
    public void setAmount(int amount) { this.amount = amount; }
    
}
