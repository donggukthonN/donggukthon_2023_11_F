/*로그인 인스턴스를 위한 간단한 예시입니다. */

import { loginInstance } from "./instance";

export const fetchUser = async() => {
  const {data} = await loginInstance.get(``); //엔드포인트
  return data;
}