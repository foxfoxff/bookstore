package com.example.demo.service;

import com.example.demo.entity.Book;
import com.example.demo.entity.User;
import com.example.demo.entity.UserAuthority;
import com.example.demo.utils.messageUtils.Message;

import java.util.List;

public interface UserService {
    UserAuthority checkAuthority(String userAccount, String userPassword);

    User getUser();

    void setUserSignature(String userSignature);

    Float getUserProperty();

    Message add2Cart(Integer id);

    List<Integer> getCart();
}