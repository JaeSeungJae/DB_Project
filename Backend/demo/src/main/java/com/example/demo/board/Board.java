package com.example.demo.board;

public class Board {
    private int uid; // 게시판 고유 ID
    private String name; // 게시판 이름 (예: 자유게시판)
    private int writeLevel; // 글 작성 권한 레벨
    private int readLevel; // 글 읽기 권한 레벨

    // Getters and Setters
    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getWriteLevel() {
        return writeLevel;
    }

    public void setWriteLevel(int writeLevel) {
        this.writeLevel = writeLevel;
    }

    public int getReadLevel() {
        return readLevel;
    }

    public void setReadLevel(int readLevel) {
        this.readLevel = readLevel;
    }
}
