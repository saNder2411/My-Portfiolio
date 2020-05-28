import Data from '../database/database';

class APIService {

  constructor(data) {
    this._data = data;
  }

  getData = async (lang) => {
    const res = await new Promise((resolve) => {
      setTimeout(() => resolve(this._data[lang]), 0);
    });

    return res;
  };

}

export default new APIService(Data);
