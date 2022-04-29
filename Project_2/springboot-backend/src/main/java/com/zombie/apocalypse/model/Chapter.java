package com.zombie.apocalypse.model;

public class Chapter {
    private Long chapterId;
    private String chapterName;
    private String chapterDescription;
    private User userId;

    public Chapter(Long chapterId, String chapterName, String chapterDescription, User userId) {
        this.chapterId = chapterId;
        this.chapterName = chapterName;
        this.chapterDescription = chapterDescription;
        this.userId = userId;
    }

    public Long getChapterId() {
        return chapterId;
    }

    public void setChapterId(Long chapterId) {
        this.chapterId = chapterId;
    }

    public String getChapterName() {
        return chapterName;
    }

    public void setChapterName(String chapterName) {
        this.chapterName = chapterName;
    }

    public String getChapterDescription() {
        return chapterDescription;
    }

    public void setChapterDescription(String chapterDescription) {
        this.chapterDescription = chapterDescription;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Chapter{" +
                "chapterId=" + chapterId +
                ", chapterName='" + chapterName + '\'' +
                ", chapterDescription='" + chapterDescription + '\'' +
                ", userId=" + userId +
                '}';
    }
}
