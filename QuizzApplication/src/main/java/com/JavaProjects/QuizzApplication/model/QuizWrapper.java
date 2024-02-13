package com.JavaProjects.QuizzApplication.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class QuizWrapper {

    private Integer id;
    private String title;
    private String category;
}
