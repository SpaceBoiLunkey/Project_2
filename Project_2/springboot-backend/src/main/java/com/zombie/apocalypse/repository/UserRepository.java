package com.zombie.apocalypse.repository;
import com.zombie.apocalypse.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {

    User findByName(String name);
}
