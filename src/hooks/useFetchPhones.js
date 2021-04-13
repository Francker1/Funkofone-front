import { useState, useEffect } from 'react';
import { getPhones } from '../helpers/getPhones';

export const useFetchPhones = (id = '') => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getPhones(id).then((phones) => {
      setState({
        data: phones,
        loading: false,
      });
    });
  }, [id]);

  return state;
};
