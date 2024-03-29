package com.educonnect.moumitha.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRegisterRequest {
    private String name;
    private String email;
    private String password;
    private String mobile;
    private String role;
}
