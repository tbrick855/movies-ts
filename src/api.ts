import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.omdbapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getMovieList = async (subject: string) => {
  const resp = await instance.get("/", {
    params: {
      s: subject,
      apikey: process.env.REACT_APP_API_KEY,
    },
  });
  if (resp.status === 200) {
    return resp.data;
  }
};

export const getMovieDetail = async (id: string) => {
  const resp = await instance.get("/", {
    params: {
      i: id,
      apikey: process.env.REACT_APP_API_KEY,
    },
  });
  if (resp.status === 200) {
    return resp.data;
  }
};
