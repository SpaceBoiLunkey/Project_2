package com.zombieapocalypse.springbootbackend.repository;

import com.zombieapocalypse.springbootbackend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository{
    public Account saveAccount(Account account);
    public List<Account> saveAccounts(List<Account> accounts);
    public List<Account> getAccounts();
    public Account getAccountById(int id);
    public Account updateAccount(Account account);
    public String deleteAccount(int id);
}
