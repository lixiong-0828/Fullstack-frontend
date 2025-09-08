package com.lixiong.paint_man.Controller;

import java.net.http.HttpResponse.ResponseInfo;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lixiong.paint_man.Service.UserService;
import com.lixiong.paint_man.entity.User;
import com.lixiong.paint_man.pojo.Result;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getUserByName")
    public Result getUserByName(@RequestParam String name) {


        log.info("in method getUserByName() ,param name : {}", name);
        Optional<User> user = userService.getUserByName(name);
        return Result.success(user);
 
    }
    
    @GetMapping("/getAllUsers")
    public Result getAllUsers() {

        List<User> users= userService.getAllUsers();
        return Result.success(users);
    }

    @PostMapping("/createUsers")
    public Result createUsers(@RequestBody User user) {

        log.info("in method createUsers() ,param user : {}", user);
        //TODO: process POST request
        
        userService.createUser(user);
        return Result.success("OK!");
    }

    @PutMapping("putUserById")
    public Result putUserById(@RequestBody User user) {
        //TODO: process PUT request

         log.info("in method putUserById() ,param user : {}", user);

        userService.createUser(user);
        
        return Result.success("update OK~");
    }
    
    
   
}
