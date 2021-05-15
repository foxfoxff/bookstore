package com.example.demo.entity;
import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;


@Data
@Entity
@Table(name = "order2book",schema = "bookstore")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class OrderBook {
    @Id
    @Column(name = "obid")
    private Integer obid;
    @Basic
    @Column(name = "orderid")
    private Integer orderid;
    @Basic
    @Column(name = "id")
    private Integer bookid;


}
