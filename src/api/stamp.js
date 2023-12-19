import { stampInstance } from "./instance";

// 2-2
export const getStampSingle = async (stampId, accessCookie) => {
  try {
    const { data } = await stampInstance.get(`/${stampId}/details`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 2-3
export const getStampMyList = async (accessCookie) => {
  try {
    const { data } = await stampInstance.get(`/stamp-list`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 3-5
export const postNewStamp = async (formData, accessCookie) => {
  try {
    const { data } = await stampInstance.post(`/new-stamp`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
      formData,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 3-6
export const getStampInfo = async (stampId, accessCookie) => {
  try {
    const { data } = await stampInstance.get(`/${stampId}/stamp-info`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 4-1
export const getStampList = async (accessCookie) => {
  try {
    const { data } = await stampInstance.get(`/all-list`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 4-3
export const putStampLike = async (stampId, like, accessCookie) => {
  try {
    const { data } = await stampInstance.put(`/${stampId}/like`, {
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
