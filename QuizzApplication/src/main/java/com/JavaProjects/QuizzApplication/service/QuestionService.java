package com.JavaProjects.QuizzApplication.service;

import com.JavaProjects.QuizzApplication.model.Question;
import com.JavaProjects.QuizzApplication.dao.QuestionDao;
import jakarta.persistence.EntityNotFoundException;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionDao questionDao;

    public List<Question> getAllQuestions() {
        try {
            return questionDao.findAll();
        } catch (Exception e) {
            throw new ServiceException("Error fetching all questions", e);
        }
    }

    public List<Question> getQuestionsByCategory(String category) {
        try {
            return questionDao.findByCategory(category);
        } catch (Exception e) {
            throw new ServiceException("Error fetching questions for category: " + category, e);
        }
    }

    public void addQuestion(Question question) {
        try {
            questionDao.save(question);
        } catch (Exception e) {
            throw new ServiceException("Error adding question", e);
        }
    }

    public void updateQuestion(Question question) {
        try {
            questionDao.save(question);
        } catch (Exception e) {
            throw new ServiceException("Error updating question", e);
        }
    }

    public void deleteQuestion(Integer id) {
        if (!questionDao.existsById(id)) {
            throw new EntityNotFoundException("Question with ID " + id + " not found");
        }
        try {
            questionDao.deleteById(id);
        } catch (Exception e) {
            throw new ServiceException("Error deleting question", e);
        }
    }
}
