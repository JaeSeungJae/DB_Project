package DB_Project_back.DB.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class GlobalCorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 경로에 대해 CORS 설정
                .allowedOrigins("http://localhost:5173") // 모든 Origin 허용
                .allowedMethods("*") // 모든 HTTP 메서드 허용 (GET, POST, PUT, DELETE 등)
                .allowedHeaders("*") // 모든 헤더 허용
                .allowCredentials(true); // 자격 증명 허용 (쿠키, 인증 정보 등)
    }
}
