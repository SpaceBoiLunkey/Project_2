package com.zombie.apocalypse.data;

public interface UserDAO {
    /*
     *
     * DESCIPRTION:
     * Building a User Data Access Object (DAO) interface where all methods
     * will be abstract with no body. This means that whatever class implements
     * the User Interface, it MUST implement all the abstract methods declared
     * here in the interface.
     *
     * CRUD OPERATONS:
     * Create a User
     * Retrieve a User
     * Retrieve all Users
     * Update a User
     * Delete a User
     *
     *
    */
    public String addUser(User user);
    public User getUserById(Integer userId);
    public List<User> getAllUsers();
    public String updateUser(User user);
    public String deleteUserById(Integer userId);
}
