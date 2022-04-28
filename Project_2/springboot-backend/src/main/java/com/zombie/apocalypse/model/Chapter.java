package com.zombie.apocalypse.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "Chapters")
public class Chapter implements Serializable {
    @Id
    private Long chapterId;
    private String chapterName;
    private String chapterDescription;
    private Set<User> userId;

    @Column(name = "Id", nullable = false)
    public Long getChapterId() {
        return chapterId;
    }

    public void setChapterId(Long chapterId) {
        this.chapterId = chapterId;
    }

    @Column(name = "Name", nullable = false)
    public String getChapterName() {
        return chapterName;
    }

    public void setChapterName(String chapterName) {
        this.chapterName = chapterName;
    }

    @Column(name = "Descrption", nullable = false)
    public String getChapterDescription() {
        return chapterDescription;
    }

    public void setChapterDescription(String chapterDescription) {
        this.chapterDescription = chapterDescription;
    }

    @OneToMany(fetch = FetchType.EAGER, targetEntity = User.class)
    @JoinColumn(name = "Id", nullable = false)
    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }
}
