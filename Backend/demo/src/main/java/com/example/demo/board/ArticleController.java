package com.example.demo.board;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    // 1. 모든 게시글 조회
    @GetMapping("/getBoard")
    public List<Article> getAllArticles() {
        return articleService.getAllArticles();
    }

    // 2. 특정 게시글 조회
    @GetMapping("/getArticle/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable int id) {
        try {
            Article article = articleService.getArticleById(id);
            return ResponseEntity.ok(article);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    // 3. 게시글 등록
    @PostMapping("/postArticle")
    public ResponseEntity<String> createArticle(@RequestBody Article article) {
        int result = articleService.createArticle(article);
        if (result > 0) {
            return ResponseEntity.ok("Article created successfully");
        } else {
            return ResponseEntity.status(500).body("Failed to create article");
        }
    }

    @PostMapping("/deleteArticle")
    public ResponseEntity<String> deleteArticle(@RequestBody Map<String, Integer> payload) {
        int articleId = payload.get("articleId");
        int result = articleService.deleteArticle(articleId);
        if (result > 0) {
            return ResponseEntity.ok("Article deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Article not found");
        }
    }

}
