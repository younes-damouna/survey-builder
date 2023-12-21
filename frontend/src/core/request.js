import axios from "axios";

export const sendRequest = async ({ route, body, method = "GET",isLogin=false }) => {
  try {
    const response = await axios.request({
      url: `http://localhost:8000/${route}`,
      method:method,
      data: body,
      headers: {
        // "Authorization": isLogin?'':'Bearer '.JSON.parse(localStorage.getItem("token"))

        // 'Content-Type': 'application/json',
        // // "Content-Type": "application/x-www-form-urlencoded",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "*",
        // "Access-Control-Allow-Headers":"*"
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
