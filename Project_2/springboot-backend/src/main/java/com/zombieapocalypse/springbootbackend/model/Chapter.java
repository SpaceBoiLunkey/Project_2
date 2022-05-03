package com.zombieapocalypse.springbootbackend.model;

import lombok.*;
import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
@Table(name = "chapter")
public class Chapter {
    @Id
    @GeneratedValue
    private Long chapterId;
    private String chapterName;
    private String chapterDescription;
    // private Account userId;
}
