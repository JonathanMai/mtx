export const get = url => apiCall('get', url);
export const post = (url, body) => apiCall('post', url, body);
export const update = (url, body) => apiCall('patch', url, body);
export const remove = url => apiCall('delete', url);

const buildPackage = (method, body) => {
  const apiData = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  if (body) apiData.body = JSON.stringify(body);

  return apiData;
};

const apiCall = (method, url, body = null) => {
  let host = url;
  return new Promise((resolve, reject) => {
    fetch(host, buildPackage(method, body)).then(resp => resolve(resp.json()));
  });
};
