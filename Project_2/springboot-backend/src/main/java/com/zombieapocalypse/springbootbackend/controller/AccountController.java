package com.zombieapocalypse.springbootbackend.controller;

// Imported annotations from lombok dependency
import com.zombieapocalypse.springbootbackend.model.Account;
import com.zombieapocalypse.springbootbackend.service.AccountServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// TODO: test request in postman
// @RestController will be the controller for our database controls which are the CRUD functions within the service layer package. Think of the @RestController as a TV remote and @Service will hold the buttons to our TV remote. We will use this TV remote to control the database communication In the AccountController class, we will create endpoints for the userService class CRUD functions within the service layer package so that the may communicate
@RestController
public class AccountController {

     // @Autowire will wire these endpoints with their corresponding CRUD functions. created service instance to implement user services from the service layer package
    @Autowired
    private AccountServiceImpl service;


    // ******************************* ENDPOINTS *******************************
    // ENDPOINTS FOR CREATE CRUD FUNCTIONS
    @PostMapping("/addAccount")
    public Account addAccount(@RequestBody Account user) {
        return service.saveAccount(user);
    }
    @PostMapping("/addAccounts")
    public List<Account> addAccounts(@RequestBody List<Account> users) {
        return service.saveAccounts(users);
    }



    // ENDPOINTS FOR RETRIEVE CRUD FUNCTIONS
    @GetMapping("/Accounts")
    public List<Account> findAllAccounts() {
        return service.getAccounts();
    }
    @GetMapping("/Accounts/{id}")
    public Account findProductById(@PathVariable int id) {
        return service.getAccountById(id);
    }



    // ENDPOINTS FOR UPDATE CRUD FUNCTIONS
    @PutMapping("/update")
    public Account updateAccount(@RequestBody Account user) {
        return service.updateAccount(user);
    }



    // ENDPOINTS FOR DELETE CRUD FUNCTIONS
    @DeleteMapping("/delete/{id}")
    public  String deleteAccount(@PathVariable int id) {
        return service.deleteAccount(id);
    }
}
