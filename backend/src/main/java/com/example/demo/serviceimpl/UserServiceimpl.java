package com.example.demo.serviceimpl;


import com.example.demo.dao.UserDao;
import com.example.demo.entity.Book;
import com.example.demo.entity.UserAuthority;
import com.example.demo.service.UserService;
import com.example.demo.utils.messageUtils.Message;
import com.example.demo.utils.sessionUtils.SessionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.User;

import java.util.List;

@Service
public class UserServiceimpl implements UserService {
    UserDao userDao;

    @Autowired
    void setUserDao(UserDao bookDao) {
        this.userDao = bookDao;
    }

    @Override
    public UserAuthority checkAuthority(String userAccount, String userPassword) {
        return userDao.checkAuthority(userAccount, userPassword);
    }

    @Override
    public User getUser() {
        return userDao.getUser();
    }

    @Override
    public void setUserSignature(String userSignature) {

    }

    @Override
    public Float getUserProperty() {
        return null;
    }

    @Override
    public Message add2Cart(Integer Id) {
        Integer custom = SessionUtil.getUserId();
        System.out.println(custom);
        return userDao.add2Cart(custom,Id);

    }

    @Override
    public List<Integer> getCart() {
        Integer custom = SessionUtil.getUserId();

        return userDao.getCart(custom);
    }


}
