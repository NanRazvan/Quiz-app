package com.JavaProjects.QuizzApplication.service;

import com.JavaProjects.QuizzApplication.Model.*;
import com.JavaProjects.QuizzApplication.dao.QuestionDao;
import com.JavaProjects.QuizzApplication.dao.QuizDao;
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

    public ResponseEntity<String> createQuiz(String category, Integer numQ, String title) {
        List<Question> question = questionDao.findRandomQuestionsByCategory(category,numQ);

        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setQuestions(question);
        quiz.setCategory(category);
        quizDao.save(quiz);

        return new ResponseEntity<>("Success", HttpStatus.OK);
    }

    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
        Optional<Quiz> quiz = quizDao.findById(id);
        List<Question> questionFromDB = quiz.get().getQuestions();
        List<QuestionWrapper> questionForUser = new ArrayList<>();
        for(Question q: questionFromDB)
        {
            QuestionWrapper qw = new QuestionWrapper
                    (q.getId(),q.getQuestionTitle(),q.getOption1(), q.getOption2(), q.getOption3(),q.getOption4());
            questionForUser.add(qw);
        }

        return new ResponseEntity<>(questionForUser,HttpStatus.OK);
    }


    public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
        Quiz quiz = quizDao.findById(id).get();
        List<Question> questions = quiz.getQuestions();
        int score = 0;
        for(int i=0;i<responses.size();i++){
            if(responses.get(i).getResponse().equals(questions.get(i).getRightAnswer()))
                score++;
        }
        return new ResponseEntity<>(score,HttpStatus.OK);
    }

    public ResponseEntity<List<QuizWrapper>> getQuizzesByCategory(String category) {
        List<Quiz> quizzes = quizDao.findByCategory(category);
        List<QuizWrapper> quizzesForUser= new ArrayList<QuizWrapper>();
        for(Quiz quiz: quizzes)
        {
            QuizWrapper qw  = new QuizWrapper(quiz.getId(),quiz.getTitle(),quiz.getCategory());
            quizzesForUser.add(qw);
        }
        return new ResponseEntity<>(quizzesForUser,HttpStatus.OK);
    }

    public ResponseEntity<List<QuizWrapper>> getAllQuizzes() {
        List<Quiz> quizzes = quizDao.findAll();
        List<QuizWrapper> quizzesForUser= new ArrayList<QuizWrapper>();
        for(Quiz quiz: quizzes)
        {
            QuizWrapper qw  = new QuizWrapper(quiz.getId(),quiz.getTitle(),quiz.getCategory());
            quizzesForUser.add(qw);
        }
        return new ResponseEntity<>(quizzesForUser,HttpStatus.OK);
    }
}
