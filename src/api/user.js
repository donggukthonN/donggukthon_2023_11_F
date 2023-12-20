import { userInstance } from "./instance";

const APIconstant = `/api/v1/user`;

// 3-1
export const getMakeCanvas = async (accessCookie) => {
  try {
    const { data } = await userInstance.get(`${APIconstant}/make-canvas`, {
      headers: {
        Authorization: `Bearer ${accessCookie}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 1-1
export const nameCheck = async (accessCookie, nickname) => {
  try{
    console.log(accessCookie);
    const {data} = await userInstance.post(`${APIconstant}/check-nickname`,
    {nickname : nickname},
    { headers: {
      // Authorization: `Bearer ${accessCookie}`,
      Authorization: `Bearer ${accessCookie}`,
    }});
    console.log(data);
    return data;
  }catch(error){
    console.log(error.config);
  }
}

// 1-2
export const getInfo = async (token, nickname) => {
  try{
    const { data } = await userInstance.post(`${APIconstant}/more-info`, 
      nickname,
      {headers: {
        Authorization: `Bearer ${token}`,
      }},
    );
    console.log(data);
    return data;
  }catch(error) {
    console.log(error);
  }
}