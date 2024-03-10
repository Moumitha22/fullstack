import instance from "./axios";

const api_uri = "http://localhost:8080";

export const getAllInstitutes = () => instance.get(`${api_uri}/api/v1/institute/get`);
export const getInstitute = (email) => instance.get(`${api_uri}/api/v1/institute/get/${email}`);