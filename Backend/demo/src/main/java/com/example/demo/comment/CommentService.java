package com.example.demo.comment;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final JdbcTemplate jdbcTemplate;

    public CommentService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // RowMapper: ResultSet 데이터를 Comment 객체로 변환
    private final RowMapper<Comment> commentRowMapper = (rs, rowNum) -> {
        Comment comment = new Comment();
        comment.setUid(rs.getInt("uid"));
        comment.setArticleId(rs.getInt("article_id"));
        comment.setAuthorId(rs.getInt("author_id"));
        comment.setContent(rs.getString("content"));
        comment.setCreateDate(rs.getTimestamp("created_date").toLocalDateTime());
        return comment;
    };

    // 특정 게시글의 댓글 조회
    public List<Comment> getCommentsByArticleId(int articleId) {
        String sql = "SELECT * FROM comment WHERE article_id = ? ORDER BY created_date ASC";
        return jdbcTemplate.query(sql, commentRowMapper, articleId);
    }

    // 댓글 등록
    public int addComment(Comment comment) {
        String sql = "INSERT INTO comment (article_id, author_id, content, created_date) VALUES (?, ?, ?, NOW())";
        return jdbcTemplate.update(sql, comment.getArticleId(), comment.getAuthorId(), comment.getContent());
    }
    public int deleteComment(int commentId) {
        String sql = "DELETE FROM comment WHERE uid = ?";
        return jdbcTemplate.update(sql, commentId);
    }

}
