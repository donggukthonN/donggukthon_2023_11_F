import { userInstance } from "./instance";

// 3-1
export const getMakeCanvas = async (accessCookie) => {
  try {
    const { data } = await userInstance.get(`/make-canvas`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
