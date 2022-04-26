package com.zombie.apocalypse.data;

public class Game {
    private Long gameId;
    private Chapter chapterId;

    public Game() {
    }

    public Game(Long gameId, Chapter chapterId) {
        this.gameId = gameId;
        this.chapterId = chapterId;
    }

    public Long getGameId() {
        return gameId;
    }

    public void setGameId(Long gameId) {
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
