export const getPhones = async (id = '') => {
  try {
    // url can be in environment variables
    const url = `http://localhost:9000/apiv1/phones/${id}`;

    const resp = await fetch(url);
    const phones = await resp.json();

    return phones;
  } catch (e) {
    return e;
  }
};
