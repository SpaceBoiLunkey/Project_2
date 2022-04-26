package com.zombie.apocalypse.service;
import com.zombie.apocalypse.dao.UserDAO;
import com.zombie.apocalypse.dao.UserDAOImpl;
import com.zombie.apocalypse.data.User;

import java.util.*;

public class UserServiceImpl implements UserService{
    public List<User> getUserWithId(Long id){
        UserDAO userDAO = new UserDAOImpl();
        List<User> userList = userDAO.getUserWithId(id);
        return null;
    }
}
