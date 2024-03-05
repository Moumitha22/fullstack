package com.educonnect.moumitha.config;

import java.io.IOException;

import org.springframework.http.HttpHeaders;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.educonnect.moumitha.repository.TokenRepository;
import com.educonnect.moumitha.utils.JwtUtil;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;


@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    
    private final JwtUtil jwtUtil;
    private final UserDetailsService userDetailsService;
    private final TokenRepository tokenRepository;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,@NonNull  HttpServletResponse response,@NonNull FilterChain filterChain)
            throws ServletException, IOException {
                final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
                final String token;
                final String userEmail;
        
                if(authHeader == null || !authHeader.startsWith("Bearer ")){
                    filterChain.doFilter(request,response);
                    return;
                }
                token = authHeader.substring(7);
                userEmail = jwtUtil.extractUsername(token);  // User email extracted from token (claim)
        
                if(userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                    UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);

                    // manual expiration
                    var isTokenValid = tokenRepository.findByToken(token).map(t -> !t.isExpired() && !t.isRevoked())
                    .orElse(false);

                    // timeout expiration
                    if(jwtUtil.isTokenValid(token, userDetails) && isTokenValid){
                        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userEmail,null,userDetails.getAuthorities());
                        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authToken);
                    }
                }
                filterChain.doFilter(request, response);
    }   
}


