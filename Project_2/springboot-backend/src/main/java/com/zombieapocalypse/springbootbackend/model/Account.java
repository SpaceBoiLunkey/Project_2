package com.zombieapocalypse.springbootbackend.model;

import lombok.*;
import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
@Table(name = "account")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int accountId;
    private String accountName;
    private String accountPassword;
    @OneToOne
    private Chapter chapterId;
}
