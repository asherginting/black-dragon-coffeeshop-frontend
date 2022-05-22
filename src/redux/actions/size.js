import http from '../../helpers/http';

const getSize = () => {
  return {
    type: 'GET_SIZE',
    payload: http().get('/sizes?page=1&limit=10')
  };
};

export default getSize;
