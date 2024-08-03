package com.zags.FinalyticsBackend.Service;

import ch.qos.logback.classic.encoder.JsonEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.zags.FinalyticsBackend.Models.User;
import com.zags.FinalyticsBackend.Repository.UserRepository;

@Service
public class MyUserDetailService implements UserDetailsService {

    @Autowired
    UserRepository userRepo;

    public Integer Signup(User jsonuser) {
        // Check if user already exists
        if (userRepo.existsById(jsonuser.getEmail())) {
            return 400;
        }

        // Create user and return 200
        System.out.println("Creating User ... ");
        userRepo.save(jsonuser);
        return 200;
    }


    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            return userRepo.findById(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + username));
        } catch (Exception e) {
            System.err.println("Error loading user by username: " + e.getMessage());
            throw new UsernameNotFoundException("User not found with email: " + username);
        }
    }
}