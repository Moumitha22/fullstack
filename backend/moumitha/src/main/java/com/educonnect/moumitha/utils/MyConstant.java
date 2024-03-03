package com.educonnect.moumitha.utils;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;

public class MyConstant {
    
    public static final String AUTH = "/api/v1/auth";
    public static final String USER = "/api/v1/user";
    public static final String ADMIN = "/api/v1/admin";

    public static final String REGISTER = "/register";
    public static final String LOGIN = "/login";
    public static final String LOGOUT= "/logout";


    public static final String GET = "/get";
    public static final String DELETE = "/delete";
    public static final String UPDATE = "/update";

    public static final String[] WHITELIST = {
        "/api/v1/auth/**"
    };
    
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:4000","http://localhost:5173");
    public static final List<String> HEADERS = Arrays.asList(HttpHeaders.AUTHORIZATION,HttpHeaders.CONTENT_TYPE);
    public static final List<String> METHODS = Arrays.asList(HttpMethod.GET.name(),
    HttpMethod.POST.name(),HttpMethod.PUT.name(),HttpMethod.PATCH.name(),HttpMethod.DELETE.name(),
    HttpMethod.HEAD.name(),HttpMethod.OPTIONS.name());

}
