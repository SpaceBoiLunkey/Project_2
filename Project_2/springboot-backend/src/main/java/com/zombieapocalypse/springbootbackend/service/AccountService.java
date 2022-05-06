package com.zombieapocalypse.springbootbackend.service;

import com.zombieapocalypse.springbootbackend.model.Account;
import java.util.List;

public interface AccountService {

    // Create CRUD function
    public Account createAccount(Account account);
    // Retrieve CRUD function
    public List<Account> getAccounts();
    // Retrieve CRUD function
    public Account getAccountById(int id);
    // Update: CRUD function
    public Account updateAccount(int id, Account account);
    // Delete: CRUD function
    public String deleteAccount(int id);
}
