package com.zombieapocalypse.springbootbackend.service;

import com.zombieapocalypse.springbootbackend.model.Account;
import com.zombieapocalypse.springbootbackend.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

 // @Service will be the created services for our @RestController Which is the controller to speak to our database.
 // Think of @Service as the services for which buttons will provide for a Tv remote; the TV remote being the @RestController for which will
 // speak to the database in the AccountService class, we will create CRUD functions for creating accounts. WE have created endpoints for these
 // CRUD functions within the controller layer package
@Service
public class AccountServiceImpl implements AccountService{

     // @Autowire will wire these CRUD functions with their corresponding ENDPOINTS created repository instance for custom CRUD function practice from the repository service layer package
    @Autowired
    private AccountRepository repository;


    // ******************************* CRUD FUNCTIONS *******************************
    // CREATE: 1. save 1 account to database && 2. save all accounts to database
    public Account saveAccount(Account account){
        return repository.save(account);
    }
    public List<Account> saveAccounts(List<Account> accounts){
        return repository.saveAll(accounts);
    }



    // RETRIEVE: 1. fetch all data from database && 2. fetch data by Id && 3. fetch data by name
    public List<Account> getAccounts(){
        return repository.findAll();
    }
    public Account getAccountById(int id){
        return repository.findById(id).orElse(null);
    }



    // UPDATE: 1. update account by name
    public Account updateAccount(Account account){
        Account existingAccount = repository.findById(account.getAccountId()).orElse(null);
        existingAccount.setAccountName(account.getAccountName());
        existingAccount.setAccountPassword(account.getAccountPassword());
        return repository.save(existingAccount);
    }



    // DELETE: 1. delete account by id
    public String deleteAccount(int id){
        repository.deleteById(id);
        return "account " + id + "removed";
    }


}
