package com.example.demo.comment;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    // 특정 게시글의 댓글 조회
    @GetMapping("/getComment/{articleId}")
    public List<Comment> getCommentsByArticleId(@PathVariable int articleId) {
        return commentService.getCommentsByArticleId(articleId);
    }

    // 댓글 작성
    @PostMapping("/postComment")
    public ResponseEntity<String> addComment(@RequestBody Comment comment) {
        int result = commentService.addComment(comment);
        if (result > 0) {
            return ResponseEntity.ok("Comment added successfully");
        } else {
            return ResponseEntity.status(500).body("Failed to add comment");
        }
    }
    @PostMapping("/deleteComment")
    public ResponseEntity<String> deleteComment(@RequestBody Map<String, Integer> payload) {
        int commentId = payload.get("commentId");
        int result = commentService.deleteComment(commentId);
        if (result > 0) {
            return ResponseEntity.ok("Comment deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Comment not found");
        }
    }
}
