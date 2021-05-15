package com.example.demo.entity;
import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;
@Data
@Entity
@Table(name = "orderdetail",schema = "bookstore")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "orderid")
public class Order {
    @Id
    @Column(name = "orderid")
    @GeneratedValue(strategy = IDENTITY)
    private Integer orderid;
    @Basic
    @Column(name ="ordertime")
    private String ordertime;
    @Basic
    @Column(name ="orderstate")
    private String orderstate;
    @Basic
    @Column(name ="orderprice")
    private String orderprice;
    @Basic
    @Column(name ="address")
    private String orderaddr;
    @Basic
    @Column(name ="tel")
    private String tel;




}
