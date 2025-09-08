package com.lixiong.paint_man.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lixiong.paint_man.Service.OrderService;
import com.lixiong.paint_man.entity.Orders;
import com.lixiong.paint_man.pojo.Result;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("order")
@Slf4j
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/getOrderByUserId")
    public Optional<Orders> getOrderByUserId(Long userId){

        Optional<Orders> orders = orderService.getOrdersById(userId);
        return orders;
    }

    // @PostMapping("createOrders")
    // public Result createOrders(@RequestParam Long userId) {
    //     //TODO: process POST request

    //     Orders orders = orderService.creatOrders(userId);
        
    //     return Result.success(orders);
    //     }

    @PostMapping("createOrders")
    public ResponseEntity<Orders> createOrders(@RequestParam Long userId) {
        //TODO: process POST request

        Orders orders = orderService.creatOrders(userId);

        log.info("orders :========= {}" ,orders.getOrderStatus());
        
        return ResponseEntity.ok(orders);
        }
    


    
}
