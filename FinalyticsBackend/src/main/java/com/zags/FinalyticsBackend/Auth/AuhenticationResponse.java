package com.zags.FinalyticsBackend.Auth;

public class AuhenticationResponse {
    private final String jwt;

    public AuhenticationResponse(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }
}
