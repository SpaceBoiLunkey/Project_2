package com.zombie.apocalypse.service;

import com.zombie.apocalypse.model.User;
import com.zombie.apocalypse.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {



    // created Crud functions that will be utilized by the controller

    // created repository instance to save data
    @Autowired
    private UserRepository repository;



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
    public List<User> getUsers(List<User> users){
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
