package com.example.demo.chat;

public class Chat {
    private int messageId;
    private int roomId;
    private int senderId;
    private String message;
    private String sentAt;

    // Getters
    public int getMessageId() {
        return messageId;
    }

    public int getRoomId() {
        return roomId;
    }

    public int getSenderId() {
        return senderId;
    }

    public String getMessage() {
        return message;
    }

    public String getSentAt() {
        return sentAt;
    }

    // Setters
    public void setMessageId(int messageId) {
        this.messageId = messageId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public void setSenderId(int senderId) {
        this.senderId = senderId;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setSentAt(String sentAt) {
        this.sentAt = sentAt;
    }
}
