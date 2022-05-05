package com.zombieapocalypse.springbootbackend.controller;
import com.zombieapocalypse.springbootbackend.model.Account;
import com.zombieapocalypse.springbootbackend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;


/* Checklist */
// TODO: test request in postman
// TODO: check CrossOrigin
// TODO: check RequestMapping



/* Class Description */
// @RestController will be the controller for our database controls which are the CRUD functions within the service layer package.
// Think of the @RestController as a TV remote and @Service will hold the buttons to our TV remote. We will use this TV remote to
// control the database communication In the AccountController class, we will create endpoints for the accountService class CRUD
// functions within the service layer package so that the may communicate



@CrossOrigin(origins = "http://localhost:5432")
@RestController
@RequestMapping("/api/v1/")
public class AccountController {

     // @Autowire will wire these endpoints with their corresponding CRUD functions. created service instance to implement account services from the service layer package
    @Autowired
    private AccountService service;


    // ******************************* ENDPOINTS *******************************
    // ENDPOINTS FOR CREATE CRUD FUNCTIONS
    @PostMapping("/accounts")
    public Account addAccount(@RequestBody Account account) {
        return service.createAccount(account);
    }



    // ENDPOINTS FOR RETRIEVE CRUD FUNCTIONS
    @GetMapping("/accounts")
    public List<Account> findAllAccounts() {
        return service.getAccounts();
    }
    @GetMapping("/accounts/{id}")
    public Account findProductById(@PathVariable int id) {
        return service.getAccountById(id);
    }



    // ENDPOINTS FOR UPDATE CRUD FUNCTIONS
    @PutMapping("/update")
    public Account updateAccount(@RequestBody Account account) {
        return service.updateAccount(account);
    }



    // ENDPOINTS FOR DELETE CRUD FUNCTIONS
    @DeleteMapping("/delete/{id}")
    public  String deleteAccount(@PathVariable int id) {
        return service.deleteAccount(id);
    }
}
