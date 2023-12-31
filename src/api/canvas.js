import { canvasInstance } from "./instance";

const APIconstant = `/api/v1/canvas`;

// 3-2
export const getMakeStamp = async (canvasId, accessCookie) => {
  try {
    const { data } = await canvasInstance.get(`${APIconstant}/${canvasId}/make-stamp`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 3-3
export const getCheckRoomMaker = async (canvasId, accessCookie) => {
  try {
    const { data } = await canvasInstance.get(`${APIconstant}/${canvasId}/check-room-maker`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
