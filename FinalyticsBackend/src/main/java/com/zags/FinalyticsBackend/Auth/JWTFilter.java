package com.zags.FinalyticsBackend.Auth;

import com.zags.FinalyticsBackend.Service.MyUserDetailService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
@Component
public class JWTFilter extends OncePerRequestFilter {


    @Autowired
    private MyUserDetailService myUserDetailService;
    @Autowired
    private JwtUtil jwtUtil;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

    final String  header = request.getHeader("Authorization");

    String email = null;
    String jwt = null;

    if(header!=null && header.startsWith("Bearer ")){
        jwt = header.substring(7);
        email = jwtUtil.extractUsername(jwt);
    }

    if(email!=null && SecurityContextHolder.getContext().getAuthentication() == null)
    {
        UserDetails user =  this.myUserDetailService.loadUserByUsername(email);


        if(jwtUtil.validateToken(jwt,user.getUsername())){

            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(user,null,null);
            token.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(token);



    }

    }
    filterChain.doFilter(request,response);

    }
}
