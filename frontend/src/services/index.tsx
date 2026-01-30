// api.ts or api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000, // optional
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
