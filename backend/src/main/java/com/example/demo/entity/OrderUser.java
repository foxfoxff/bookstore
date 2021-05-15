package com.example.demo.entity;
import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;
@Data
@Entity
@Table(name = "order_user",schema = "bookstore")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "orderid")
public class OrderUser {
    @Id
    @Column(name = "orderid")
    @GeneratedValue(strategy = IDENTITY)
    private Integer orderid;
    @Basic
    @Column(name="userid")
    private String userId;
}
