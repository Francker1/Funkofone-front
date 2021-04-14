/* eslint-disable */

import { renderHook } from '@testing-library/react-hooks';
import { useFetchPhones } from '../../hooks/useFetchPhones';

describe('Test in custom hook useFetchPhones',  () => {
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchPhones());

    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return one object with data and loading in false', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useFetchPhones());

    // before extract data, warning with get data from component unmounted
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBeGreaterThanOrEqual(1);
    expect(loading).toBe(false);
  });
});


describe('Test in custom useFetchPhones v2 ', () => {
  test('should return default information', () => {
    const { result } = renderHook(() => useFetchPhones());

    const { data, loading } = result.current;

    expect(data).toStrictEqual([]);
    expect(loading).toBe(true);
  });
});
