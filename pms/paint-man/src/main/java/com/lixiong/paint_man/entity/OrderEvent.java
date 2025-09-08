package com.lixiong.paint_man.entity;

import java.time.LocalDateTime;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "order_events")  //这个就是【mongo】DB的数据表名
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderEvent {
    @Id
    private String id;

    private String orderId;
    private String eventType;
    private String description;
    private LocalDateTime eventTime= LocalDateTime.now();

    public OrderEvent(String orderId,String eventType,String description){
        this.orderId = orderId;
        this.eventType = eventType;
        this.description = description;
    }
    
}
