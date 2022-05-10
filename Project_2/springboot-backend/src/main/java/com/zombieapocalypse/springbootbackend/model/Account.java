package com.zombieapocalypse.springbootbackend.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Account {
    private int accountId;
    private String accountEmail;
    private String accountFName;
    private String accountLName;
    private String accountPassword;
}
