import { CHECK_TOKEN } from "./types";

export const checkToken = payload => {
  console.warn('dispacth')
  return {
    type: CHECK_TOKEN,
    payload
  };
};
