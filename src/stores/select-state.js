import { atom } from "recoil";

export const selectState = atom({
  key: 'selectState',
  default: {
    id: '',
    stampImg: '',
    likeCnt: 0,
    like: false,
    index: 0,
  }
});