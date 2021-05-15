package com.example.demo.repository;
import com.example.demo.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
@Transactional
public interface CartRepository extends JpaRepository<Cart, Integer> {
    @Modifying
    @Query(value = "insert into cart (id,userid,num) values (?1,?2,?3)", nativeQuery = true)
    void add2repository(Integer id, Integer userid,Integer num);

    @Query(value = "SELECT id FROM Cart WHERE userid =:userid")
    List<Integer> getCart(@Param("userid") Integer userid);


}