package com.zags.FinalyticsBackend.Controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.zags.FinalyticsBackend.Models.User;
import com.zags.FinalyticsBackend.Service.RegisterService;

@RestController
public class signupcontroller {

    @Autowired
    RegisterService registerService;

    @PostMapping("/register")
    public ResponseEntity<String> Register(@RequestBody User entity) {
        
        System.out.println("Hit register in controller ");
        
        String message="";
        registerService.registerUser(entity);        
        Integer code = registerService.registerUser(entity);

        if(code == 400)
        {
            message = "User already exists!";
        }
        else
        {
            message = "User Created";
        }
        
        // Return a ResponseEntity with a success message and HTTP status code 201 (Created)

        return new ResponseEntity<>(message, HttpStatus.CREATED);

    }
    

    


}
