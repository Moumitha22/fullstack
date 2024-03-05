package com.educonnect.moumitha.enumerated;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Role {
    ADMIN(Set.of(
        Permission.USER_READ,
        Permission.USER_CREATE,
        Permission.USER_UPDATE,
        Permission.USER_DELETE,

        Permission.STUDENT_READ,
        // Permission.STUDENT_CREATE,
        Permission.STUDENT_DELETE,

        // Permission.INSTITUTE_CREATE,
        Permission.INSTITUTE_READ,
        Permission.INSTITUTE_DELETE,

        Permission.APPLICATION_READ,
        Permission.APPLICATION_DELETE,

        Permission.COURSE_READ,
        // Permission.COURSE_DELETE,

        Permission.TRANSACTION_READ
    )),
    INSTITUTE(Set.of(
        Permission.USER_CREATE,
        Permission.USER_READ,
        Permission.USER_UPDATE,
        Permission.USER_DELETE,

        Permission.INSTITUTE_CREATE,
        Permission.INSTITUTE_READ,
        Permission.INSTITUTE_UPDATE,
        Permission.INSTITUTE_DELETE,

        Permission.STUDENT_READ,
        
        Permission.COURSE_CREATE,
        Permission.COURSE_READ,
        Permission.COURSE_UPDATE,
        Permission.COURSE_DELETE,

        Permission.APPLICATION_READ,
        Permission.APPLICATION_UPDATE,

        Permission.TRANSACTION_READ

    )),
    STUDENT(Set.of(
        Permission.USER_CREATE,
        Permission.USER_READ,
        Permission.USER_UPDATE,
        Permission.USER_DELETE,

        Permission.STUDENT_CREATE,
        Permission.STUDENT_READ,
        Permission.STUDENT_UPDATE,
        Permission.STUDENT_DELETE,

        Permission.COURSE_READ,
        Permission.COURSE_UPDATE,  //count

        Permission.INSTITUTE_READ,

        Permission.APPLICATION_CREATE,
        Permission.APPLICATION_READ,
        Permission.APPLICATION_DELETE,

        Permission.TRANSACTION_CREATE,
        Permission.TRANSACTION_READ,
        Permission.TRANSACTION_DELETE
    ));

    @Getter
    public final Set<Permission> permissions;

     public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions().stream()
                            .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                            .collect(Collectors.toList());

        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        
        return authorities;
    }
}
