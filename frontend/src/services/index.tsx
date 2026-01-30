// api.ts or api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000, // optional
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:5173S",
  },
});

export default api;
