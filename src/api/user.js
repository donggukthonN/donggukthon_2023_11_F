import { userInstance } from "./instance";

// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwMzYyMDM2OSwidXNlckNsaWVudElkIjoidGVzdDJDbGllbnRJZCJ9.wkFJzho5UcBRqO19WAlbxkizZz_Z_UY-NuiHczSQheFceqiiWIxP6idtavT-ceeq5Z0GCHdaoChgpazPv2B_Vg';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwMzYyMDM2OSwidXNlckNsaWVudElkIjoidGVzdDFDbGllbnRJZCJ9.u3Ifl_t5-JGVw3JQ_40ww-M2RUvoUSM4HcxrlqCnPKtPsm792Nw5FuLzGnsvqLjb4SpOYVj_vqVYsOKMuUGBOg';

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

// 1-1
export const nameCheck = async nickname => {
  try{
    const {data} = await userInstance.post(`/check-nickname`,
    {nickname : nickname},
    { headers: {
      // Authorization: `Bearer ${accessCookie}`,
      Authorization: `Bearer ${token}`,
    }});
    console.log(data);
    return data;
  }catch(error){
    console.log(error.config);
  }
}

// 1-2
export const getInfo = async (accessCookie, nickname) => {
  try{
    const { data } = await userInstance.post(`/more-info`, 
      nickname,
      {headers: {
        Authorization: `Bearer ${accessCookie}`,
      }},
    );
    console.log(data);
    return data;
  }catch(error) {
    console.log(error);
  }
}