package com.lixiong.springboot_demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lixiong.springboot_demo.entity.User;
import com.lixiong.springboot_demo.pojo.Result;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseCookie.ResponseCookieBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api") //http://localhost:8080/api
public class FirstController {

    @Value("${app.name}")
    private String appName;

    @Value("${app.version}")
    private String appVersion;

    @GetMapping("/hello")  //http://localhost:8080/api/hello
    public String helloSpring() {
        return new String("hello ,it's a first time to spring!");
    }
    
    @GetMapping("get-1/{param}") //http://localhost:8080/api/get-1/param
    public String get_1(@PathVariable String param) {
        return new String(" hello , it's with a PathVariable param :" + param);
    }

    @GetMapping("get-2") //http://localhost:8080/api/get-2?param=nihao
        public String get_2(@RequestParam String param) {
        return new String( "hello , it's with a RequestParam param :" + param);
    }

    @PostMapping("/user")
    public Result inputUser(@RequestBody User user) {
        //TODO: process POST request
        
        System.out.println("===============name : {} " + user.getName() + " =================age: {}" + user.getAge());
        return Result.success("OK!!! demo created!!!  code :" + ResponseEntity.ok(user));
    }  
    
    
    
    
}
