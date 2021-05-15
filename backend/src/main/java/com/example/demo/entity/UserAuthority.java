package com.example.demo.entity;
import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;
import java.awt.*;
import java.lang.reflect.Type;
import java.sql.Timestamp;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;


@Data
@Entity
@Table(name = "user_auth" ,schema = "bookstore" )
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})

public class UserAuthority {
    @Id
    @Column(name = "userid")
    private Integer userId;
    @Basic
    @Column(name = "username")
    private String username;
    @Basic
    @Column(name = "password")
    private String password;
    @Basic
    @Column(name = "user_type")
    private Integer userType;
}
