package com.example.demo.controller;

import com.example.demo.entity.Book;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



import java.util.List;

@RestController
public class BookController {
    BookService bookService;

    @Autowired
    void setBookService(BookService bookService) {
        this.bookService = bookService;
    }


   @RequestMapping("/getBooks")
   List<Book> getBooks() {
       return bookService.getBooks();
   }
    @RequestMapping (value = "/getbookbyid")
    Book getBookById(@RequestParam("id") int id) {
        return bookService.getBookById(id);
    }




}
