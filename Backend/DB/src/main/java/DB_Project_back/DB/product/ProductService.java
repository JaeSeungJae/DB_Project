package DB_Project_back.DB.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // 상품 등록 메서드
    public String registerProduct(ProductRegisterController.ProductRequest request) {
        String checkSql = "SELECT COUNT(*) FROM product WHERE name = ? AND model_name = ?";
        int count = jdbcTemplate.queryForObject(checkSql, Integer.class, request.getName(), request.getModel_name());

        if (count > 0) {
            return "failed: duplicate product name and model";
        }

        String sql = "INSERT INTO product (name, model_name, brand, category, price, description) VALUES (?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, request.getName(), request.getModel_name(), request.getBrand(),
                request.getCategory(), request.getPrice(), request.getDescription());
        return "success";
    }

    // 특정 상품 조회 메서드
    public Product getProductByUid(int uid) {	// uid만 유니크니까 uid로 처리
        String sql = "SELECT * FROM product WHERE uid = ?";
        try {
            return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
                Product product = new Product();
                product.setUid(rs.getInt("uid"));
                product.setName(rs.getString("name"));
                product.setModel_name(rs.getString("model_name"));
                product.setBrand(rs.getString("brand"));
                product.setCategory(rs.getString("category"));
                product.setPrice(rs.getInt("price"));
                product.setDescription(rs.getString("description"));
                return product;
            }, uid);
        } catch (Exception e) {
            return null; // 상품 없는 경우
        }
    }

}
