package com.lixiong.paint_man.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lixiong.paint_man.entity.OrderEvent;
import com.lixiong.paint_man.repository.OrderEventRepository;

@Service
public class OrderEventService {
   @Autowired
    private OrderEventRepository orderEventRepository;

    public OrderEvent recordOrderEvent(String orderId, String eventType,String description){

        // OrderEventRepository orderEventRepository = new OrderEventRepository() ;

        OrderEvent orderEvent = new OrderEvent(orderId,eventType,description);
        OrderEvent newOrderEvent = orderEventRepository.save(orderEvent);

        return newOrderEvent;

    }

    public List<OrderEvent> getOrderEventByOderId(String orderId){

        return orderEventRepository.findByOrderId(orderId);

    }
    
}
