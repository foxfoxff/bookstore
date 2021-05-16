package com.example.demo.daoimpl;

import com.example.demo.dao.Bookdao;
import com.example.demo.entity.Book;
import com.example.demo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import java.util.List;
@Repository
public class BookDaoimpl implements Bookdao {

    BookRepository bookRepository;
    @Autowired
    void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    @Override
    public List<Book> getBooks() {
        return bookRepository.getBooks();
    }

    @Override
     public Book getBookById(Integer id) {
        return bookRepository.getBookById(id);
    }

    
}
