import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

/* 로그인 api를 위한 간단한 예시입니다. */
const loginInstance = axios.create(instance.defaults);
loginInstance.defaults.baseURL += `/api/login`;

export {
  loginInstance,
  instance as default
}; 