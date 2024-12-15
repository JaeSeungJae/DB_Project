package com.example.demo.favorite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class FavoriteService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // 관심상품 추가
    public boolean addFavoriteProduct(Favorite favorite) {
        try {
            // 현재 관심 상품 목록 가져오기
            String selectSql = "SELECT favorite_products FROM member WHERE id = ?";
            String currentFavorites = jdbcTemplate.queryForObject(selectSql, new Object[]{favorite.getUserId()}, String.class);

            // 중복 확인
            if (currentFavorites != null && currentFavorites.contains(String.valueOf(favorite.getProductUid()))) {
                return false; // 이미 추가된 상품
            }

            // 새로운 관심 상품 목록 업데이트
            String updatedFavorites = (currentFavorites == null || currentFavorites.isEmpty())
                    ? String.valueOf(favorite.getProductUid())
                    : currentFavorites + "," + favorite.getProductUid();

            String updateSql = "UPDATE member SET favorite_products = ? WHERE id = ?";
            jdbcTemplate.update(updateSql, updatedFavorites, favorite.getUserId());
            return true;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    // 관심상품 조회
    public List<Map<String, Object>> getFavoriteProducts(String userId) {
        List<Map<String, Object>> productList = new ArrayList<>();

        try {
            String selectSql = "SELECT favorite_products FROM member WHERE id = ?";
            String favoriteProducts = jdbcTemplate.queryForObject(selectSql, new Object[]{userId}, String.class);

            if (favoriteProducts != null && !favoriteProducts.isEmpty()) {
                String[] productUids = favoriteProducts.split(",");

                // 각 상품 UID에 대해 product 테이블에서 정보 가져오기
                String productQuery = "SELECT * FROM product WHERE uid = ?";
                for (String uid : productUids) {
                    Map<String, Object> product = jdbcTemplate.queryForMap(productQuery, Integer.parseInt(uid));
                    productList.add(product);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return productList;
    }
}