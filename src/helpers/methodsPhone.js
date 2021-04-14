import axios from 'axios';

const URL = `http://localhost:9000/apiv1/phones/`;

export const api = {
  createPhone: async ({
    name,
    model,
    manufacturer,
    detail,
    price,
    processor,
    color,
    ram,
    size,
    screen,
  }) => {
    try {
      /**
       * Set params in this way because is possible that I need check before each param
       *  */
      const params = {
        name,
        model,
        manufacturer,
        detail,
        price,
        processor,
        color,
        ram,
        size,
        screen,
      };

      const url = URL;

      /**
       * But, if I don't need check params, I can use this way:
       * const params = JSON.stringify(params);
       */

      const response = await axios.post(url, params, {
        headers: { 'Content-Type': 'application/json' },
      });

      // console.log(response);
      return response;
    } catch (err) {
      return err;
    }
  },

  deletePhone: async (id) => {
    try {
      const response = await axios.delete(`${URL}/${id}`);

      return response;
    } catch (err) {
      return err;
    }
  },

  editPhone: async (id, data) => {
    try {
      const params = JSON.stringify(data);

      const response = await axios.put(`${URL}/${id}`, params, {
        headers: { 'Content-Type': 'application/json' },
      });

      return response;
    } catch (err) {
      return err;
    }
  },
};

export default api;
