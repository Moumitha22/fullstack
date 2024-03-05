package com.educonnect.moumitha.utils;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;

public class MyConstant {
    
    public static final String AUTH = "/api/v1/auth";    
    public static final String ADMIN = "/api/v1/admin";

    // User Controller
    public static final String USER = "/api/v1/user";

    // Student Controller
    public static final String STUDENT = "/api/v1/student";

    // Institute Controller
    public static final String INSTITUTE = "/api/v1/institute";

    // Course Controller
    public static final String COURSE = "/api/v1/course";

    // Application Controller
    public static final String APPLICATION = "/api/v1/application";

    // Transaction Controller
    public static final String TRANSACTION = "/api/v1/transaction";
    
    // Authorisation
    public static final String REGISTER = "/register";
    public static final String LOGIN = "/login";
    public static final String LOGOUT= "/logout";
    public static final String FORGOT_PASSWORD= "/forgot-password";


    public static final String ADD = "/add";
    public static final String GET = "/get";
    public static final String DELETE = "/delete";
    public static final String UPDATE = "/update";
    public static final String UPDATE_DETAILS = "/updateDetails";

    // Whitelist
    public static final String[] WHITELIST = {
        "/api/v1/auth/**",
        "/swagger-ui/**",
        "/swagger-ui.html/",
        "/v3/api-docs/**",
    };
    
    // Web Security
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:4000","http://localhost:5173");
    public static final List<String> HEADERS = Arrays.asList(HttpHeaders.AUTHORIZATION,HttpHeaders.CONTENT_TYPE);
    public static final List<String> METHODS = Arrays.asList(HttpMethod.GET.name(),
    HttpMethod.POST.name(),HttpMethod.PUT.name(),HttpMethod.PATCH.name(),HttpMethod.DELETE.name(),
    HttpMethod.HEAD.name(),HttpMethod.OPTIONS.name());

    // SWAGGER
    public static final String SWAGGER_INFO_TITLE = "EduConnect";
    public static final String SWAGGER_INFO_DESCRIPTION = "My API documentation";
    public static final String SWAGGER_INFO_VERSION = "1.0.0";
    public static final String SWAGGER_INFO_CONTACT_NAME = "Moumitha";
    public static final String SWAGGER_INFO_CONTACT_EMAIL = "moumitharaghu22@gmail.com";
    public static final String SWAGGER_INFO_CONTACT_URL = "https://example.com";
    public static final String SWAGGER_INFO_LICENSE_NAME = "Apache 2.0";
    public static final String SWAGGER_INFO_LICENSE_URL = "https://www.apache.org/licenses/LICENSE-2.0.html";
    
    
    // JsonWebToken
    public static final String JWT_LOCALHOST_URL = "http://localhost:8080";
    public static final String JWT_SECURITY_SCHEME_NAME = "bearerAuth";
    public static final String JWT_SECURITY_SCHEME = "bearer";
    public static final String JWT_DESCRIPTION= "Provide a Json Web Token";    
    public static final String JWT_NAME = "JWT";
    public static final String JWT_BEARER_FORMAT = "JWT";

    
}
