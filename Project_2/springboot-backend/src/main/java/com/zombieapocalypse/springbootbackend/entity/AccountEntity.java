package com.zombieapocalypse.springbootbackend.entity;

import lombok.*;
import javax.persistence.*;

/* Description */
// create account entity that will work with the Java Persistence API, so we can save the data in the database
@Entity
@Data
@Table(name = "accounts")
public class AccountEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accountId;
    private String accountEmail;
    private String accountFName;
    private String accountLName;
    private String accountPassword;
}
