// import { message } from 'antd';
// import { useCallback, useContext } from 'react';

const { REACT_APP_BASE_URL } = process.env;

export const useRequest = () => {
  const request = async ({
    baseUrl = REACT_APP_BASE_URL,
    url = '',
    method = 'GET',
    headers = {},
    body = null,
  }) => {
    if (body && method?.toLowerCase() === 'post') {
      body = JSON.stringify(body);
      headers['Content-Type'] = 'application/json';
    }
    const res = await fetch(`${baseUrl}${url}`, {
      method,
      headers,
    });
    const response = await res.json();
    if (!response?.success) {
      throw new Error(
        response?.message || 'Oops! Something went wrong with refresh token!'
      );
    }
    return response;
  };

  return { request };
};
