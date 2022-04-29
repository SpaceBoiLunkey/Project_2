package com.zombie.apocalypse.controller;

// Imported annotations from lombok dependency
import com.zombie.apocalypse.model.User;
import com.zombie.apocalypse.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/*
 * @RestController will be the controller for our database controls which are the
 * CRUD functions within the service layer package.
 *
 * Think of the @RestController as a TV remote and @Service will hold the buttons
 * to our TV remote. We will use this TV remote to control the database communication
 *
 * In the UserController class, we will create endpoints for the userService class
 * CRUD functions within the service layer package so that the may communicate
 */
@RestController
public class UserController {

    /*
     * @Autowire will wire these endpoints with their corresponding CRUD functions
     * created service instance to implement user services from the service layer
     * package
     */
    @Autowired
    private UserService service;


    // ******************************* ENDPOINTS *******************************
    // ENDPOINTS FOR CREATE CRUD FUNCTIONS
    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {
        return service.saveUser(user);
    }
    @PostMapping("/addUsers")
    public List<User> addUsers(@RequestBody List<User> users) {
        return service.saveUsers(users);
    }


    // ENDPOINTS FOR RETRIEVE CRUD FUNCTIONS
    @GetMapping("/Users")
    public List<User> findAllUsers() {
        return service.getUsers();
    }
    @GetMapping("/Users/{id}")
    public User findProductById(@PathVariable int id) {
        return service.getUserById(id);
    }
    @GetMapping("/User/{name}")
    public User findUserByName(@PathVariable String name) {
        return service.getUserByName(name);
    }


    // ENDPOINTS FOR UPDATE CRUD FUNCTIONS
    @PutMapping("/update")
    public User updateUser(@RequestBody User user) {
        return service.updateUser(user);
    }


    // ENDPOINTS FOR DELETE CRUD FUNCTIONS
    @DeleteMapping("/delete/{id}")
    public  String deleteUser(@PathVariable int id) {
        return service.deleteUser(id);
    }
}
