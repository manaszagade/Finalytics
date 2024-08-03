package com.zags.FinalyticsBackend.Models;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Collection;
import java.util.List;


@Component
@Entity
public class User implements UserDetails {

    private String fname;
    private String lname;
    @Id
    private String email;
    private String password;

    // Getters and Setters
    public String getFname() {
        return fname;
    }

    public void setFname(String username) {
        this.fname = username;
    }
    public String getLname() {
        return lname;
    }

    public void setLname(String username) {
        this.lname = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
