package com.lixiong.paint_man.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lixiong.paint_man.entity.OrderEvent;
import com.lixiong.paint_man.entity.OrderStatus;
import com.lixiong.paint_man.entity.Orders;
import com.lixiong.paint_man.entity.User;
import com.lixiong.paint_man.repository.OrdersRepository;

@Service
public class OrderService {

    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private OrderEventService orderEventService;
    @Autowired
    private UserService userService;



    public List<Orders> getAllOrders(){

        return null;
    }

    public Orders creatOrders(Long userId ) {

        Optional<User> user = userService.getUserByUserId(userId) ;
        if (user==null) {
            return null;
        }

        //生成新数据时，ID必修null
        Orders orders = new Orders(null,user.get(), LocalDateTime.now() , OrderStatus.PENDING);
        Orders newOrders = ordersRepository.save(orders);
        //向【mongo】DB，插入新数据
        OrderEvent orderEvent= orderEventService.recordOrderEvent(newOrders.getId().toString(),"New_Create","new orderCreated.");

        return newOrders;

    }

    public Optional<Orders> getOrdersById(Long id){
        return ordersRepository.findById(id);
    }
    
}
