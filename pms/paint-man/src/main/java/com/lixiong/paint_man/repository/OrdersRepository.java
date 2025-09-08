package com.lixiong.paint_man.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lixiong.paint_man.entity.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Long>{

    List<Orders> findByUserId(Long userId);
    
}
