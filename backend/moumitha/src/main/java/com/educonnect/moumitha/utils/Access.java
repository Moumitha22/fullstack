package com.educonnect.moumitha.utils;

public class Access {
    public static final String USER_READ = "hasAuthority('user:read')";
    public static final String USER_CREATE = "hasAuthority('user:create')";
    public static final String USER_UPDATE = "hasAuthority('user:update')";
    public static final String USER_DELETE = "hasAuthority('user:delete')";

    public static final String STUDENT_READ = "hasAuthority('student:read')";
    public static final String STUDENT_CREATE = "hasAuthority('student:create')";
    public static final String STUDENT_UPDATE = "hasAuthority('student:update')";
    public static final String STUDENT_DELETE = "hasAuthority('student:delete')";

    public static final String INSTITUTE_READ = "hasAuthority('institute:read')";
    public static final String INSTITUTE_CREATE = "hasAuthority('institute:create')";
    public static final String INSTITUTE_UPDATE = "hasAuthority('institute:update')";
    public static final String INSTITUTE_DELETE = "hasAuthority('institute:delete')";

    public static final String COURSE_READ = "hasAuthority('course:read')";
    public static final String COURSE_CREATE = "hasAuthority('course:create')";
    public static final String COURSE_UPDATE = "hasAuthority('course:update')";
    public static final String COURSE_DELETE = "hasAuthority('course:delete')";

    public static final String TRANSACTION_READ = "hasAuthority('transaction:read')";
    public static final String TRANSACTION_CREATE = "hasAuthority('transaction:create')";
    public static final String TRANSACTION_UPDATE = "hasAuthority('transaction:update')";
    public static final String TRANSACTION_DELETE = "hasAuthority('transaction:delete')";

    public static final String APPLICATION_READ = "hasAuthority('application:read')";
    public static final String APPLICATION_CREATE = "hasAuthority('application:create')";
    public static final String APPLICATION_UPDATE = "hasAuthority('application:update')";
    public static final String APPLICATION_DELETE = "hasAuthority('application:delete')";
}