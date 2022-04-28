package com.zombie.apocalypse.service;

import org.apache.catalina.User;
import java.util.*;

public interface UserService {
    // Crud Operations
    Collection<User> findAll();

    User findById(Integer id);


}
