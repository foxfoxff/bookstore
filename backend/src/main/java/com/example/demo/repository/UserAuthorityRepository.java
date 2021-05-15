package com.example.demo.repository;

import com.example.demo.entity.UserAuthority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserAuthorityRepository extends JpaRepository<UserAuthority,Integer> {
    @Query(value = "from UserAuthority where username = :username and password = :password")
    UserAuthority checkAuthority(@Param("username") String username, @Param("password") String password);

}
