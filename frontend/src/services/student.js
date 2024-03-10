import instance from "./axios";

const api_uri = "http://localhost:8080";


export const getStudents = () => instance.get(`${api_uri}/api/v1/student/get`);
export const getStudent = (email) => instance.get(`${api_uri}/api/v1/student/get/${email}`);
export const updateStudentDetails = (data) => instance.patch(`${api_uri}/api/v1/student/update`,data);