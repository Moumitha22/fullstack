package com.educonnect.moumitha;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.educonnect.moumitha.dto.request.UserRegisterRequest;
import com.educonnect.moumitha.service.UserService;

@SpringBootApplication
public class MoumithaApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoumithaApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(UserService userService) {
		return args -> {
			var user = UserRegisterRequest.builder().
			name("Admin").
			email("admin@gmail.com").
			password("Admin@123").
			mobile("9876543210").
			role("ADMIN").
			build();
			userService.register(user);
		};
	}

}
