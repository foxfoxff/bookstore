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
@Table(name = "user",schema = "bookstore")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})

public class User {
    @Id
    @Column(name = "userid")
    @GeneratedValue(strategy = IDENTITY)
    private Integer userId;
    @Basic
    @Column(name = "nickname")
    private String nickname;
    @Basic
    @Column(name = "username")
    private String username;
    @Basic
    @Column(name = "tel")
    private String userTel;
    @Basic
    @Column(name = "address")
    private String userAddress;
}
