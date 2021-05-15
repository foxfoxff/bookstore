package com.example.demo.entity;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cart",schema = "bookstore")
public class Cart {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "cartid")
    private  Integer cartid;

    @Basic
    @Column(name = "userid")
    private Integer userid;
    @Basic
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "num")
    private Integer num;
}
