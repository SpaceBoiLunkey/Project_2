package com.zombie.apocalypse.ui;
import com.zombie.apocalypse.data.User;
import com.zombie.apocalypse.service.UserService;
import com.zombie.apocalypse.service.UserServiceImpl;
import java.util.*;

public class MainApp {
    public static void main(String[] args) {
        UserService userService = new UserServiceImpl();
        List<User> userId = userService.getUserWithId(1L);

        userId.forEach(System.out::println);
    }
}
