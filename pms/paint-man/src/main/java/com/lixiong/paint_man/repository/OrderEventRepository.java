package com.lixiong.paint_man.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.lixiong.paint_man.entity.OrderEvent;
import java.util.List;


@Repository
public interface OrderEventRepository extends MongoRepository<OrderEvent,String>{

    List<OrderEvent> findByOrderId(String orderId);
    
}
