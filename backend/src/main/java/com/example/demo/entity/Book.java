package com.example.demo.entity;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.awt.*;
import java.lang.reflect.Type;
import java.sql.Timestamp;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;


@Entity
@Table(name = "book",schema = "bookstore")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Book {

    private int id;
    private String isbn;
    private String name;
    private String type;
    private String image;
    private String author;
    private Float  price;
    private Integer inventory;
    private String description;
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = IDENTITY)
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "isbn")
    public String getIsbn() {
        return isbn;
    }
    public void setIsbn(String title) {
        this.isbn = title;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String title) {
        this.name = title;
    }

    @Basic
    @Column(name = "type")
    public String getType() {
        return type;
    }

    public void setType(String title) {
        this.type = title;
    }

    @Basic
    @Column(name = "author")
    public String getAuthor() {
        return author;
    }

    public void setAuthor(String title) {
        this.author = title;
    }

    @Basic
    @Column(name = "price")
    public Float getPrice() {
        return price;
    }

    public void setPrice(Float title) {
        this.price = title;
    }

    @Basic
    @Column(name = "inventory")
    public Integer getAge() {
        return inventory;
    }

    public void setAge(Integer age) {
        this.inventory = age;
    }
    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String title) {
        this.description = title;
    }
    @Basic
    @Column(name = "image")
    public String getImage() {
        return image;
    }

    public void setImage(String title) {
        this.image = title;
    }
}