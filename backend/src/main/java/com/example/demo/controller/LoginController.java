package com.example.demo.controller;

import com.example.demo.entity.UserAuthority;
import com.example.demo.service.BookService;
import com.example.demo.service.UserService;

import com.example.demo.utils.messageUtils.Message;
import com.example.demo.utils.messageUtils.MessageUtil;
import com.example.demo.utils.sessionUtils.SessionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.sf.json.JSONObject;

import java.util.Map;

@RestController
public class LoginController {
    @Autowired
     UserService userService;

    LoginController() {
    }



    @RequestMapping("/login")
    public Message login(@RequestBody Map<String, String> params) {
        String userAccount = params.get("username");
        System.out.println(userAccount);
        String userPassword = params.get("password");
        System.out.println(userPassword);
        UserAuthority userAuthority = userService.checkAuthority(userAccount, userPassword);

        if (userAuthority != null) {
            JSONObject newSession = new JSONObject();
            newSession.put("userId", userAuthority.getUserId());
            newSession.put("username", userAuthority.getUsername());
            newSession.put("userType", userAuthority.getUserType());
            SessionUtil.setSession(newSession);

            JSONObject responseData = JSONObject.fromObject(userAuthority);
            responseData.remove("password");

            return MessageUtil.createMessage(MessageUtil.LOGIN_SUCCESS_CODE, MessageUtil.LOGIN_SUCCESS_MSG, responseData);
        } else {
            return MessageUtil.createMessage(MessageUtil.LOGIN_ERROR_CODE, MessageUtil.LOGIN_ERROR_MSG);
        }
    }
    @RequestMapping("/logout")
    public Message logout(@RequestBody Map<String, String> params){
        boolean status = SessionUtil.removeSession();
        if(status){
            return MessageUtil.createMessage(MessageUtil.LOGOUT_SUCCESS_CODE, MessageUtil.LOGOUT_SUCCESS_MSG);
        }
        else return MessageUtil.createMessage(MessageUtil.LOGOUT_ERROR_CODE,MessageUtil.LOGOUT_ERROR_MSG);

    }
    @RequestMapping("/checkSession")
    public Message checkSession() {
        JSONObject authority = SessionUtil.getAuthority();
        if (authority != null) {
            return MessageUtil.createMessage(MessageUtil.ALREADY_LOGIN_CODE, MessageUtil.ALREADY_LOGIN_MSG);
        } else
            return MessageUtil.createMessage(MessageUtil.NOT_LOGIN_CODE, MessageUtil.NOT_LOGIN_MSG);
    }
}


