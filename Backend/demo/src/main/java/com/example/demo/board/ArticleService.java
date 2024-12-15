package com.example.demo.board;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {

    private final JdbcTemplate jdbcTemplate;

    public ArticleService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // RowMapper: ResultSet 데이터를 Article 객체로 변환
    private final RowMapper<Article> articleRowMapper = (rs, rowNum) -> {
        Article article = new Article();
        article.setUid(rs.getInt("uid"));
        article.setAuthorId(rs.getInt("author_id"));
        article.setBoardId(rs.getInt("board_id"));
        article.setTitle(rs.getString("title"));
        article.setContent(rs.getString("content"));
        article.setCreateDate(rs.getTimestamp("create_date").toLocalDateTime());
        article.setHits(rs.getInt("hits"));
        return article;
    };

    // 1. 모든 게시글 조회
    public List<Article> getAllArticles() {
        String sql = "SELECT * FROM article ORDER BY create_date DESC";
        return jdbcTemplate.query(sql, articleRowMapper);
    }

    // 2. 특정 게시글 조회
    public Article getArticleById(int id) {
        String sql = "SELECT * FROM article WHERE uid = ?";
        return jdbcTemplate.queryForObject(sql, articleRowMapper, id);
    }

    // 3. 게시글 등록
    public int createArticle(Article article) {
        String sql = "INSERT INTO article (author_id, board_id, title, content, create_date, hits) VALUES (?, 1, ?, ?, NOW(), 0)";
        return jdbcTemplate.update(sql, article.getAuthorId(), article.getTitle(), article.getContent());
    }

    public int deleteArticle(int articleId) {
        String sql = "DELETE FROM article WHERE uid = ?";
        return jdbcTemplate.update(sql, articleId);
    }

}
