import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

export interface httpConfig extends RequestInit {
  cookie?: string;
  data?: object;
}

export const fetchHttp = async (
  endpoint: string,
  { data, cookie, headers, ...customConfig }: httpConfig = {}
) => {

  const config: RequestInit = {
    // use GET as default method
    method: "GET",
    headers: {
      "Content-Type": data ? "application/json" : "",
      'Access-Control-Allow-Origin':'*'
    },
    credentials: 'include',
    mode:"cors",
    ...customConfig,
  };

  if (config.method?.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {}); 
  }

  return window.fetch(`${apiUrl}/${endpoint}`, config).then((response) => {
    const data = response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};
