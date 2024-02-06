package com.JavaProjects.QuizzApplication.dao;

import com.JavaProjects.QuizzApplication.Model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizDao extends JpaRepository<Quiz ,Integer> {
}
