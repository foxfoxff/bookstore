package com.example.demo.serviceimpl;

import com.example.demo.entity.Book;
import java.util.List;
import com.example.demo.dao.Bookdao;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;

@Service
public class BookServiceImp implements BookService {
    Bookdao bookDao;

    @Autowired
    void setBookDao(Bookdao bookDao) {
        this.bookDao = bookDao;
    }
    @Override
    public List<Book> getBooks() {
        return bookDao.getBooks();
    }

    @Override
    public Book getBookById(int bookId) {
        return bookDao.getBookById(bookId);
    }


}
