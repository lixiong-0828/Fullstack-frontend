package com.lixiong.paint_man.repository;

import java.nio.file.OpenOption;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lixiong.paint_man.entity.User;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User , Long>{

    Optional<User> findById(Long id);
    Optional<User> findByName(String name);

}
     

