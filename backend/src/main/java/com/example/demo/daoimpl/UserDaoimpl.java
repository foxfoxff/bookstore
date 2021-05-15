package com.example.demo.daoimpl;

import com.example.demo.dao.UserDao;
import com.example.demo.entity.Cart;
import com.example.demo.entity.User;
import com.example.demo.entity.UserAuthority;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.UserAuthorityRepository;
import com.example.demo.repository.UserRepository;

import com.example.demo.utils.messageUtils.Message;
import com.example.demo.utils.messageUtils.MessageUtil;
import com.example.demo.utils.sessionUtils.SessionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class UserDaoimpl implements UserDao {
    UserRepository userRepository;
    UserAuthorityRepository userAuthorityRepository;
    CartRepository cartRepository;
    @Autowired
    public void setUserAuthorityRepository(UserAuthorityRepository userAuthorityRepository) {
        this.userAuthorityRepository = userAuthorityRepository;
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Autowired
    public void setCartRepository(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @Override
    public User getUser() {
        Integer userId = SessionUtil.getUserId();

        if (userId != null)
            return userRepository.getUserById(userId);
        return null;
    }

   @Override
    public UserAuthority checkAuthority(String username, String password) {
        return userAuthorityRepository.checkAuthority(username, password);
    }

    @Override
    public Message add2Cart(Integer buyer, Integer bookid) {
        System.out.println("try to insert"+bookid);
        cartRepository.add2repository(bookid,buyer,1);
        System.out.println("success to insert");
        return  MessageUtil.createMessage(0,"加入成功");
    }

    @Override
    public List<Integer> getCart(Integer userid) {
        return cartRepository.getCart(userid);
    }


}
