package com.zombie.apocalypse;
import com.zombie.apocalypse.data.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@SpringBootApplication
@RestController
public class SpringbootBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	/*@GetMapping
	public List<User> information() {
		return List.of(
				new User(
						1L,
						1L,
						"UsernameHere",
						"passwordHere"

				)
		);
	}*/
}
