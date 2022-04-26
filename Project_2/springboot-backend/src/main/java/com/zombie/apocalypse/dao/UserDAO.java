package com.zombie.apocalypse.dao;
import com.zombie.apocalypse.data.User;
import java.util.*;

public interface UserDAO {
    public List<User> getUserWithId(Long id);
}
