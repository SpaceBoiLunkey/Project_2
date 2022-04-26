package com.zombie.apocalypse.data;

public class Chapter {
    private Long chapterId;
    private String chapterName;
    private String chapterDescription;

    public Chapter() {
    }

    public Chapter(Long chapterId, String chapterName, String chapterDescription) {
        this.chapterId = chapterId;
        this.chapterName = chapterName;
        this.chapterDescription = chapterDescription;
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

    @Override
    public String toString() {
        return "Chapter{" +
                "chapterId=" + chapterId +
                ", chapterName='" + chapterName + '\'' +
                ", chapterDescription='" + chapterDescription + '\'' +
                '}';
    }
}
