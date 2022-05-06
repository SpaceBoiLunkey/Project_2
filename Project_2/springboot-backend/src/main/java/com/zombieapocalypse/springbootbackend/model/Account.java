package com.zombieapocalypse.springbootbackend.model;

import lombok.*;
import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Account {
    private int accountId;
    private String accountName;
    private String accountPassword;
//    private Chapter chapterId;
}
