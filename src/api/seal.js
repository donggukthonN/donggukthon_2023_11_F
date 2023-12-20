import { sealInstance } from "./instance";

const APIconstant = `/api/v1/seal`;

// 2-4
export const getSealSingle = async (sealId, accessCookie) => {
  try {
    const { data } = await sealInstance.get(`${APIconstant}/${sealId}/details`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

//2-5
export const getSealMyList = async (accessCookie) => {
  try {
    const { data } = await sealInstance.get(`${APIconstant}/seal-list`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 5
export const getSealList = async (accessCookie) => {
  try {
    const { data } = await sealInstance.get(`${APIconstant}/all-list`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 5-1
export const putSealLike = async (sealId, like, accessCookie) => {
  try {
    const { data } = await sealInstance.put(`${APIconstant}/${sealId}/like`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
      data: {
        like: like,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
