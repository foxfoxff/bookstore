package com.example.demo.dao;

import com.example.demo.entity.Book;
import com.example.demo.entity.User;
import com.example.demo.entity.UserAuthority;
import com.example.demo.utils.messageUtils.Message;

import java.util.List;

public interface UserDao {
    User getUser();
    UserAuthority checkAuthority(String username, String password);
    Message add2Cart(Integer buyer, Integer bookid);
    List<Integer> getCart(Integer userid);
}
