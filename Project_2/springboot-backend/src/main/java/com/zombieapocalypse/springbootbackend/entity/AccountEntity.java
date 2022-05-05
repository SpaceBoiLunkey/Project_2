package com.zombieapocalypse.springbootbackend.entity;

import com.zombieapocalypse.springbootbackend.model.Chapter;
import lombok.*;
import javax.persistence.*;

@Entity
@Data
@Table(name = "accounts")
public class AccountEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accountId;
    private String accountName;
    private String accountPassword;
    @OneToOne
    private Chapter chapterId;
}
