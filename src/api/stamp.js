import { stampInstance } from "./instance";

const APIconstant = "/api/v1/stamp";

// 2-2
export const getStampSingle = async (stampId, accessCookie) => {
  try {
    const { data } = await stampInstance.get(
      `${APIconstant}/${stampId}/details`,
      {
        headers: {
          Authorization: `Bearer ${accessCookie}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 2-3
export const getStampMyList = async (accessCookie) => {
  try {
    const { data } = await stampInstance.get(`${APIconstant}/stamp-list`, {
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
export const postNewStamp = async (stampName, accessCookie) => {
  try {
    const { data } = await stampInstance.post(`${APIconstant}/new-stamp`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
      data: {
        stampName: stampName,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 3-6
export const getStampInfo = async (stampId, accessCookie) => {
  try {
    const { data } = await stampInstance.get(
      `${APIconstant}/${stampId}/stamp-info`,
      {
        headers: {
          Authorization: `Bearer ${accessCookie}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 4-1
export const getStampList = async (accessCookie) => {
  try {
    const { data } = await stampInstance.get(`${APIconstant}/all-list`, {
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
// 4-3
export const putStampLike = async (stampId, like, accessCookie) => {
  try {
    const { data } = await stampInstance.put(`${APIconstant}/${stampId}/like`, {
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
