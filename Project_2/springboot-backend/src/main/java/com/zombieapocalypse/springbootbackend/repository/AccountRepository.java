package com.zombieapocalypse.springbootbackend.repository;

import com.zombieapocalypse.springbootbackend.model.entity.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<AccountEntity,Integer>{}