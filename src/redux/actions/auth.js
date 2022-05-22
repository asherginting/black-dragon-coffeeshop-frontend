import http from '../../helpers/http';

export const signup = (data) => {
  const { email, password, phone } = data;
  const param = new URLSearchParams();
  param.append('email', email);
  param.append('password', password);
  param.append('phone', phone);

  return ({
    type: 'AUTH_REGISTER',
    payload: http().post('/auth/signup', param)
  });
};

export const login = (email, password) => {
  const param = new URLSearchParams();
  param.append('email', email);
  param.append('password', password);

  return ({
    type: 'AUTH_LOGIN',
    payload: http().post('/auth/login', param)
  });
};

export const getUser = (token, id) => {
  return ({
    type: 'AUTH_USER',
    payload: http(token).get(`/profile/${id}`)
  });
};

export const logout = () => {
  return ({
    type: 'AUTH_LOGOUT'
  });
};
