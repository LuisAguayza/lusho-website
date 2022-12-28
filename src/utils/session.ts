import cookie from 'js-cookie';
export const getCookie = (key: string) => {
  return cookie.get(key);
};

export const setCookie = (key: string, token: any) => {
  cookie.set(key, token, { expires: 7 });
};

export const removeCookie = (key: string) => {
  cookie.remove(key);
};
