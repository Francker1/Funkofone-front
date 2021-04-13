import axios from 'axios';

export const createPhone = async ({
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

    const url = `http://localhost:9000/apiv1/phones/`;

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
};
