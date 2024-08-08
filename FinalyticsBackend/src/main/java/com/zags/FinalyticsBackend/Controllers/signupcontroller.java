package com.zags.FinalyticsBackend.Controllers;

import com.zags.FinalyticsBackend.Auth.AuhenticationResponse;
import com.zags.FinalyticsBackend.Auth.AuthorizationRequest;
import com.zags.FinalyticsBackend.Auth.JwtUtil;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.zags.FinalyticsBackend.Models.User;
import com.zags.FinalyticsBackend.Service.MyUserDetailService;

@RestController
public class signupcontroller {

    @Autowired
    MyUserDetailService myUserDetailService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtUtil jwtUtil;

    @RequestMapping("/auth")
    public String login()
    {
        return "Hello";
    }


    @RequestMapping("/")
    public String m()
    {
        return "Main";
    }

    @RequestMapping(value = "/JWTauthenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthToken(@RequestBody AuthorizationRequest authreq) throws Exception{
        System.out.println("inJWTAuth");

        try {
            System.out.println("inJWTAuth1");
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authreq.getEmail(), authreq.getPassword()));
        }
        catch (BadCredentialsException e)
        {
            throw new Exception("Incorrect details",e);
        }

        final UserDetails userDetails = myUserDetailService.loadUserByUsername(authreq.getEmail());
        System.out.println("userdetails"+ userDetails.getUsername());
        final  String jwt = jwtUtil.generateToken(userDetails);
    return ResponseEntity.ok(new AuhenticationResponse(jwt));
    }


    @PostMapping("/register")
    public ResponseEntity<String> Register(@RequestBody User entity) {
        
        System.out.println("Hit register in controller ");
        
        String message="";
        myUserDetailService.Signup(entity);
        Integer code = myUserDetailService.Signup(entity);

        if(code == 400)
        {
            message = "User already exists!";
        }
        else
        {
            message = "User Created";
        }
        

        return new ResponseEntity<>(message, HttpStatus.CREATED);

    }
    

    


}
