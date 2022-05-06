package com.zombieapocalypse.springbootbackend.service;

import com.zombieapocalypse.springbootbackend.model.entity.AccountEntity;
import com.zombieapocalypse.springbootbackend.model.Account;
import com.zombieapocalypse.springbootbackend.repository.AccountRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
import java.util.stream.Collectors;

// @Service will be the created services for our @RestController Which is the controller to speak to our database. Think of @Service as the services for which buttons will provide for a Tv remote; the TV remote being the @RestController for which will speak to the database in the AccountService class, we will create CRUD functions for creating accounts. WE have created endpoints for these CRUD functions within the controller layer package
@Service
public class AccountServiceImpl implements AccountService{
     // Created AccountRepository instance variable
    @Autowired
    private AccountRepository repository;

    // ******************************* CRUD FUNCTIONS *******************************
    // CREATE: 1. create 1 account to database
     @Override
    public Account createAccount(Account account){
         AccountEntity accountEntity = new AccountEntity();

         // copying all values of parameters to entity using beans
         BeanUtils.copyProperties(account, accountEntity);
         repository.save(accountEntity);
         return account;
    }



    // RETRIEVE: 1. fetch all data from database && 2. fetch data by Id && 3. fetch data by name
    @Override
     public List<Account> getAccounts(){
        List<AccountEntity> accountEntities
                = repository.findAll();

        List<Account> accounts = accountEntities
                .stream()
                .map(act -> new Account(
                        act.getAccountId(),
                        act.getAccountName(),
                        act.getAccountPassword()))
                .collect(Collectors.toList());
        return accounts;
    }
    @Override
    public Account getAccountById(int id){
        AccountEntity accountEntity =
                repository.findById(id).get();
        Account account = new Account();
        BeanUtils.copyProperties(accountEntity, account);
        return account;
    }



    // UPDATE: 1. update account by name
    @Override
    public Account updateAccount(int id, Account account){
        AccountEntity accountEntity
                = repository.findById(id).get();
        accountEntity.setAccountId(account.getAccountId());
        accountEntity.setAccountName(account.getAccountName());
        accountEntity.setAccountPassword(account.getAccountPassword());

        return account;
    }



    // DELETE: 1. delete account by id
    @Override
    public String deleteAccount(int id) {
        AccountEntity account = repository.findById(id).get();
        repository.delete(account);
        return "DELETED ACCOUNT: " + account;
    }
}
