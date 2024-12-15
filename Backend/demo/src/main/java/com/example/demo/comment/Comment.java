package com.example.demo.comment;

import java.time.LocalDateTime;

public class Comment {
    private int uid;              // 댓글 고유 ID
    private int articleId;        // 게시글 ID
    private int authorId;         // 작성자 ID
    private String content;       // 댓글 내용
    private LocalDateTime createdDate; // 작성 시간

    // Getters and Setters
    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public int getArticleId() {
        return articleId;
    }

    public void setArticleId(int articleId) {
        this.articleId = articleId;
    }

    public int getAuthorId() {
        return authorId;
    }

    public void setAuthorId(int authorId) {
        this.authorId = authorId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getCreateDate() {
        return createdDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createdDate = createDate;
    }
}
