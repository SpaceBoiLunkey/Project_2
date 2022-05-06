package com.zombieapocalypse.springbootbackend.model;

import lombok.*;
import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "chapter")
public class Chapter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long chapterId;
//    private String chapterName;
//    private String chapterDescription;
}
