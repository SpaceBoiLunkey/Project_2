package com.zombie.apocalypse.data;

public class Chapter {
    private Integer chapterId;
    private String chapterName;
    private String chapterDescription;

    public Chapter() {
    }

    public Chapter(Integer chapterId, String chapterName, String chapterDescription) {
        this.chapterId = chapterId;
        this.chapterName = chapterName;
        this.chapterDescription = chapterDescription;
    }

    public Integer getChapterId() {
        return chapterId;
    }

    public void setChapterId(Integer chapterId) {
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
        return "ChapterId{" +
                "chapterId=" + chapterId +
                ", chapterName='" + chapterName + '\'' +
                ", chapterDescription='" + chapterDescription + '\'' +
                '}';
    }
}
