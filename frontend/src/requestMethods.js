import axios from "axios";
const BASE_URL =  "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjYwNDA4ZWQ1MjBkNjliZWI5OGNjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDA4MzM2MSwiZXhwIjoxNjcwMTY5NzYxfQ._NPeTddhMrbJfWDI_POcS66qPex8NW574yvbttpsGp0"
export const publicRequest = axios.create({
    baseURL : BASE_URL,
});
export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});

