import instance from "./axios";

const api_uri = "http://localhost:8080";


export const addCourse = (data) => instance.post(`${api_uri}/api/v1/course/add`,data);
export const getAllCourses = () => instance.get(`${api_uri}/api/v1/course/get`);
export const getCoursesByInstitute = (id) => instance.get(`${api_uri}/api/v1/course/get/${id}`);
export const updateCourse = (id,data) => instance.patch(`${api_uri}/api/v1/cours/update/${id}`,data);