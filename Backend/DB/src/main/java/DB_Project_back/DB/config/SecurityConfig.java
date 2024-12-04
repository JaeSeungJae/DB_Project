package DB_Project_back.DB.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // CSRF 보호 비활성화 (개발용)
                .cors().and()
                .authorizeHttpRequests()
                .requestMatchers("/rest/*").permitAll() // 로그인 경로는 인증 필요 없음
                .anyRequest().authenticated(); // 다른 모든 요청은 인증 필요
        return http.build();
    }
}