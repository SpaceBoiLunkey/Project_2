package com.zombie.apocalypse.service;
import com.zombie.apocalypse.data.User;
import java.util.*;

public interface UserService {
    public List<User> getUserWithId(Long id);
}
