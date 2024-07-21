package com.zags.FinalyticsBackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zags.FinalyticsBackend.Models.User;
import com.zags.FinalyticsBackend.Repository.UserRepository;

@Service
public class RegisterService {

    @Autowired
    UserRepository userRepo;
    
    public Integer registerUser( User jsonuser)
    {
        //Check if user already exist
        //if it does, return "Already exist with a response code ? 400"
        if(userRepo.existsById(jsonuser.getEmail()) )
        {
            return 400;
        }

        //Else create user and return 200
        
        System.out.println("Creating User ... ");

        userRepo.save(jsonuser);
        return 200;
        
    }

}
