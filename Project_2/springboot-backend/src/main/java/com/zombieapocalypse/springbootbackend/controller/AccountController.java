package com.zombieapocalypse.springbootbackend.controller;
import com.zombieapocalypse.springbootbackend.model.Account;
import com.zombieapocalypse.springbootbackend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AccountController {

    @Autowired
    private AccountService service;



    // ENDPOINT FOR CREATE CRUD FUNCTION
    @PostMapping("/account")
    public Account addAccount(@RequestBody Account account) {
        return service.createAccount(account);
    }



    // ENDPOINT FOR RETRIEVE CRUD FUNCTION
    @GetMapping("/accounts")
    public List<Account> findAllAccounts() {
        return service.getAccounts();
    }



    // ENDPOINT FOR RETRIEVE CRUD FUNCTION
    @GetMapping("/account/{id}")
    public Account findProductById(@PathVariable int id) {
        return service.getAccountById(id);
    }



    // ENDPOINT FOR UPDATE CRUD FUNCTION
    @PutMapping("/account/{id}")
    public ResponseEntity<Account> updateEmployee(@PathVariable int id,
                                                   @RequestBody Account account) {
        account = service.updateAccount(id, account);
        return ResponseEntity.ok(account);
    }


    
    // ENDPOINTS FOR DELETE CRUD FUNCTION
    @DeleteMapping("/account/{id}")
    public  String deleteAccount(@PathVariable int id) {
        return service.deleteAccount(id);
    }
}
