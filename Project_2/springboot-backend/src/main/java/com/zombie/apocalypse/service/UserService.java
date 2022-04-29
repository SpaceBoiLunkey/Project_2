package com.zombie.apocalypse.service;

// Imported annotations from lombok dependency
import com.zombie.apocalypse.model.User;
import com.zombie.apocalypse.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
 * @Service will be the created services for our @RestController Which is the
 * controller to speak to our database
 *
 * Think of @Service as the services for which buttons will provide for a Tv remote;
 * the TV remote being the @RestController for which will speak to the database
 *
 * in the UseService class, we will create CRUD functions for creating users. WE
 * have created endpoints for these CRUD functions within the controller layer package
 */
@Service
public class UserService {

    /*
     * @Autowire will wire these CRUD functions with their corresponding ENDPOINTS
     * created repository instance for custom CRUD function practice from the repository
     * service layer package
     */
    @Autowired
    private UserRepository repository;


    // ******************************* CRUD FUNCTIONS *******************************
    // CREATE:
    //    1. save 1 user to database
    //    2. save all users to database
    public User saveUser(User user){
        return repository.save(user);
    }
    public List<User> saveUsers(List<User> users){
        return repository.saveAll(users);
    }


    // RETRIEVE:
    //    1. fetch all data from database
    //    2. fetch data by Id
    //    3. fetch data by name
    public List<User> getUsers(){
        return repository.findAll();
    }
    public User getUserById(int id){
        return repository.findById(id).orElse(null);
    }
    public User getUserByName(String name){
        return repository.findByName(name);
    }


    // UPDATE:
    //    1. delete user by id
    public User updateUser(User user){
        User existingUser = repository.findById(user.getUserId()).orElse(null);
        existingUser.setUserName(user.getUserName());
        existingUser.setUserPassword(user.getUserPassword());
        return repository.save(existingUser);
    }


    // DELETE:
    //    1. delete user by id
    public String deleteUser(int id){
        repository.deleteById(id);
        return "user " + id + "removed";
    }


}
