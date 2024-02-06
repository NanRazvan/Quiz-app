package com.JavaProjects.QuizzApplication.service;

import com.JavaProjects.QuizzApplication.Model.Question;
import com.JavaProjects.QuizzApplication.dao.QuestionDao;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {
    @Autowired
    QuestionDao questionDao;

    public ResponseEntity <List<Question>> getAllQuestions() {  // TODO: Exception handling
        try {
            return new ResponseEntity<>(questionDao.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            String errorMessage = "An error occurred while fetching questions: " + e.getMessage();
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<List<Question>> getQuestionsByCategory(String category) { // TODO: Exception handling
        try{
            return new ResponseEntity<>(questionDao.findByCategory(category),HttpStatus.OK);
        } catch (Exception e) {
            String errorMessage = "An error occurred while fetching questions: " + e.getMessage();
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<String> addQuestion(Question question) {
        try{
            questionDao.save(question);
            return new ResponseEntity<>("Question added", HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>("Error while adding the question", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<String> updateQuestion(Question question) {
        try{
            questionDao.save(question);
            return new ResponseEntity<>("Question updated", HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>("Error while updating the question", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<String> deleteQuestion(Integer id) {
        try{
            if(!questionDao.existsById(id))
                throw new EntityNotFoundException("Question with ID " + id + " not found");

            questionDao.deleteById(id);
            return new ResponseEntity<>("Question deleted", HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>("Question not found", HttpStatus.NOT_FOUND);
        }


    }

}
