import { atom } from "recoil";

export const selectState = atom({
  key: 'selectState',
  default: {
    id: 0,
    image: ''
  }
})