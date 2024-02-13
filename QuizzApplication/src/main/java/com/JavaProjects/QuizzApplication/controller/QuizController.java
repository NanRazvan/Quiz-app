package com.JavaProjects.QuizzApplication.controller;

import com.JavaProjects.QuizzApplication.model.QuestionWrapper;
import com.JavaProjects.QuizzApplication.model.QuizWrapper;
import com.JavaProjects.QuizzApplication.model.Response;
import com.JavaProjects.QuizzApplication.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping("create")
    public ResponseEntity<String> createQuiz(@RequestParam String category, @RequestParam Integer numQ, @RequestParam String title) {
        quizService.createQuiz(category, numQ, title);
        return ResponseEntity.ok("Quiz created successfully");
    }

    @GetMapping("getById/{id}")
    public List<QuestionWrapper> getQuizQuestions(@PathVariable Integer id) {
        return quizService.getQuizQuestions(id).getBody();
    }

    @GetMapping("getByCategory/{category}")
    public List<QuizWrapper> getQuizzesByCategory(@PathVariable String category) {
        return quizService.getQuizzesByCategory(category).getBody();
    }

    @GetMapping("getAll")
    public List<QuizWrapper> getAllQuizzes() {
        return quizService.getAllQuizzes().getBody();
    }

    @PostMapping("submit/{id}")
    public Integer getQuizResult(@PathVariable Integer id, @RequestBody List<Response> responses) {
        return quizService.calculateResult(id, responses).getBody();
    }
}
