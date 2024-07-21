package com.zags.FinalyticsBackend.Models;


import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Component
@Entity
public class User {

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
