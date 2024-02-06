package com.JavaProjects.QuizzApplication;

public class ResponseData<T>{
    private final T data;
    private final String errorMessage;

    public ResponseData(T data) {
        this.data = data;
        this.errorMessage = null;
    }

    public ResponseData(T data, String errorMessage) {
        this.data = data;
        this.errorMessage = errorMessage;
    }

    public T getData() {
        return data;
    }

    public String getError() {
        return errorMessage;
    }
}
