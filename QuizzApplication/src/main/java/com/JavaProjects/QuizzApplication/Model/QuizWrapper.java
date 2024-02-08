package com.JavaProjects.QuizzApplication.Model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class QuizWrapper {

    private Integer id;
    private String title;
    private String category;
}
