package com.zombie.apocalypse.data;

public class Game {
    private Integer gameId;
    private Chapter chapterId;

    public Game() {
    }

    public Game(Integer gameId, Chapter chapterId) {
        this.gameId = gameId;
        this.chapterId = chapterId;
    }

    public Integer getGameId() {
        return gameId;
    }

    public void setGameId(Integer gameId) {
        this.gameId = gameId;
    }

    public Chapter getChapterId() {
        return chapterId;
    }

    public void setChapterId(Chapter chapterId) {
        this.chapterId = chapterId;
    }

    @Override
    public String toString() {
        return "Game{" +
                "gameId=" + gameId +
                ", chapterId=" + chapterId +
                '}';
    }
}
