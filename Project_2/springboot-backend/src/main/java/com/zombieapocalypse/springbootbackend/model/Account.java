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
    @GeneratedValue
    private int accountId;
    private String accountName;
    private String accountPassword;
}
