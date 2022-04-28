package com.zombie.apocalypse.data;

public class User {
    private Integer userId;
    private String userName;
    private String userPassword;
    private Chapter chapterId;

    public User() {
    }

    public User(Integer userId, String userName, String userPassword, Chapter chapterId) {
        this.userId = userId;
        this.userName = userName;
        this.userPassword = userPassword;
        this.chapterId = chapterId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public Chapter getChapterId() {
        return chapterId;
    }

    public void setChapterId(Chapter chapterId) {
        this.chapterId = chapterId;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", chapterId=" + chapterId +
                '}';
    }
}
