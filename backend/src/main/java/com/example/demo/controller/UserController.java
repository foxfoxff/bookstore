package com.example.demo.controller;

import com.example.demo.entity.Book;
import com.example.demo.entity.User;

import com.example.demo.service.UserService;
import com.example.demo.utils.messageUtils.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    UserService userService;

    @Autowired
    void setUserService(UserService userService) {
        this.userService = userService;
    }
    @RequestMapping("/getUser")
    User getUser() {
        return userService.getUser();
    }
    @RequestMapping("/addToCart")
    Message add2Cart(@RequestParam("id") Integer id){
        return userService.add2Cart(id);
    }
    @RequestMapping("/getCart")
    List<Integer> getCart(){
        return userService.getCart();
    }

}
