package com.example.demo.dao;

import com.example.demo.entity.Book;

import java.util.List;

public interface Bookdao {
    List<Book> getBooks();

    Book getBookById(Integer bookId);
}