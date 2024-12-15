package com.example.demo.review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // 리뷰 추가 메서드
    public void addReview(Review review) {
        String sql = "INSERT INTO review (author_id, seller_id, content) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, review.getAuthorId(), review.getSellerId(), review.getContent());
    }

    // 특정 판매자 리뷰 조회 메서드
    public List<Review> getReviewsBySeller(String sellerId) {
        String sql = "SELECT uid, author_id, seller_id, content, created_date FROM review WHERE seller_id = ?";
        return jdbcTemplate.query(sql, new Object[]{sellerId}, (rs, rowNum) -> {
            Review review = new Review();
            review.setUid(rs.getInt("uid"));
            review.setAuthorId(rs.getString("author_id"));
            review.setSellerId(rs.getString("seller_id"));
            review.setContent(rs.getString("content"));
            review.setCreatedDate(rs.getTimestamp("created_date").toLocalDateTime());
            return review;
        });
    }
}