package com.lixiong.paint_man.Service;

import java.nio.file.OpenOption;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lixiong.paint_man.entity.User;
import com.lixiong.paint_man.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

   
    public Optional<User> getUserByName(String name){
        return userRepository.findByName(name);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public void createUser(User user){

        userRepository.save(user);
     }

     public Optional<User> getUserByUserId(Long userId){

        return userRepository.findById(userId);

     }
}
