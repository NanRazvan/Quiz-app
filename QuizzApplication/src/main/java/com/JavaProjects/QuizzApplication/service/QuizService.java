package com.JavaProjects.QuizzApplication.service;

import com.JavaProjects.QuizzApplication.model.Question;
import com.JavaProjects.QuizzApplication.model.QuestionWrapper;
import com.JavaProjects.QuizzApplication.model.Quiz;
import com.JavaProjects.QuizzApplication.model.QuizWrapper;
import com.JavaProjects.QuizzApplication.model.Response;
import com.JavaProjects.QuizzApplication.dao.QuestionDao;
import com.JavaProjects.QuizzApplication.dao.QuizDao;
import jakarta.persistence.EntityNotFoundException;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    @Autowired
    QuizDao quizDao;

    @Autowired
    QuestionDao questionDao;

    public void createQuiz(String category, Integer numQ, String title) {
        List<Question> questionList = questionDao.findRandomQuestionsByCategory(category, numQ);
        if (questionList.isEmpty()) {
            throw new ServiceException("No questions found for the given category");
        }

        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setQuestions(questionList);
        quiz.setCategory(category);
        quizDao.save(quiz);

        ResponseEntity.status(HttpStatus.CREATED).body("Quiz created successfully");
    }

    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
        Optional<Quiz> optionalQuiz = quizDao.findById(id);
        if (optionalQuiz.isPresent()) {
            Quiz quiz = optionalQuiz.get();
            List<Question> questions = quiz.getQuestions();
            List<QuestionWrapper> questionWrappers = new ArrayList<>();
            for (Question q : questions) {
                QuestionWrapper questionWrapper = new QuestionWrapper(q.getId(), q.getQuestionTitle(), q.getOption1(), q.getOption2(), q.getOption3(), q.getOption4());
                questionWrappers.add(questionWrapper);
            }
            return ResponseEntity.ok(questionWrappers);
        } else {
            throw new EntityNotFoundException("Quiz not found with ID: " + id);
        }
    }

    public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
        Quiz quiz = quizDao.findById(id).orElseThrow(() -> new EntityNotFoundException("Quiz not found with ID: " + id));
        List<Question> questions = quiz.getQuestions();
        int score = 0;
        for (int i = 0; i < responses.size(); i++) {
            if (responses.get(i).getResponse().equals(questions.get(i).getRightAnswer())) {
                score++;
            }
        }
        return ResponseEntity.ok(score);
    }

    public ResponseEntity<List<QuizWrapper>> getQuizzesByCategory(String category) {
        List<Quiz> quizzes = quizDao.findByCategory(category);
        List<QuizWrapper> quizWrappers = new ArrayList<>();
        for (Quiz quiz : quizzes) {
            QuizWrapper quizWrapper = new QuizWrapper(quiz.getId(), quiz.getTitle(), quiz.getCategory());
            quizWrappers.add(quizWrapper);
        }
        return ResponseEntity.ok(quizWrappers);
    }

    public ResponseEntity<List<QuizWrapper>> getAllQuizzes() {
        List<Quiz> quizzes = quizDao.findAll();
        List<QuizWrapper> quizWrappers = new ArrayList<>();
        for (Quiz quiz : quizzes) {
            QuizWrapper quizWrapper = new QuizWrapper(quiz.getId(), quiz.getTitle(), quiz.getCategory());
            quizWrappers.add(quizWrapper);
        }
        return ResponseEntity.ok(quizWrappers);
    }
}
