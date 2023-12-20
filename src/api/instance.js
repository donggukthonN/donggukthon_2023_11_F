import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

/* 로그인 api를 위한 간단한 예시입니다. */
const loginInstance = axios.create(instance.defaults);
loginInstance.defaults.baseURL += `/api/login`;

const sealInstance = axios.create(instance.defaults);
sealInstance.defaults.baseURL += `/api/v1/seal`;

const stampInstance = axios.create(instance.defaults);
stampInstance.defaults.baseURL += `/api/v1/stamp`;

const userInstance = axios.create(instance.defaults);
userInstance.defaults.baseURL += `/api/v1/user`;

const canvasInstance = axios.create(instance.defaults);
canvasInstance.defaults.baseURL += `/api/v1/canvas`;

export {
  loginInstance,
  sealInstance,
  stampInstance,
  userInstance,
  canvasInstance,
  instance as default,
};
