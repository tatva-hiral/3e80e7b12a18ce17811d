export async function api(
  endpoint,
  params = '',
  method = 'POST',
  headers = {'Content-Type': 'application/json'},
  xcodeFormat = false,
) {
  let parameters = '';
  if (xcodeFormat) {
    parameters = params;
  } else {
    parameters = params ? JSON.stringify(params) : params;
  }
  return fetch(endpoint, {
    method,
    headers,
    body: parameters,
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json().then((data) => ({
          success: true,
          data,
        }));
      }
      if (response.status === 401) {
        return response.json().then((data) => ({
          success: response.ok || false,
          message: data.messsage,
          status: response.status,
          data: '',
          error: '',
        }));
      }
      if (response.status === 403) {
        return {
          success: response.ok || false,
          message: 'Invalid username/password.',
          status: response.status,
          data: '',
          error: '',
        };
      }
      return {
        success: response.ok || false,
        message: 'Something went wrong, please try again later',
        data: '',
        error: '',
      };
    })
    .catch((error) => {
      return {
        message: 'Something went wrong, please try again later',
        success: false,
        data: '',
        error,
      };
    });
}
