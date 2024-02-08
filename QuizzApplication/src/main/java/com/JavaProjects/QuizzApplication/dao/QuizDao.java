package com.JavaProjects.QuizzApplication.dao;

import com.JavaProjects.QuizzApplication.Model.Question;
import com.JavaProjects.QuizzApplication.Model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizDao extends JpaRepository<Quiz ,Integer> {
    List<Quiz> findByCategory(String category);
}
