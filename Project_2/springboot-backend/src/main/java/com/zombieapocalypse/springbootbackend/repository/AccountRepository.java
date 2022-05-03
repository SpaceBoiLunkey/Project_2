package com.zombieapocalypse.springbootbackend.repository;

import com.zombieapocalypse.springbootbackend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,Integer> {

    Account findByName(String name);
}
