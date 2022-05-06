package com.zombieapocalypse.springbootbackend.entity;

import com.zombieapocalypse.springbootbackend.model.Chapter;
import lombok.*;
import javax.persistence.*;

/* Description */
// create account entity that will work with the Java Persistence API, so we can save the data in the database
@Entity
@Data
@Table(name = "accounts")
public class AccountEntity {

    // defining properties in database

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accountId;
    private String accountName;
    private String accountPassword;
    @OneToOne
    private Chapter chapterId;
}
