/* eslint-disable */
import { getPhones } from '../../helpers/getPhones';

describe('Test in fetch Phones helpers', () => {
  test('should get list of phones', async () => {
    const phones = await getPhones();

    // In case of api is down, or database dont return data, this test not pass
    expect(phones.length).toBeGreaterThanOrEqual(1);
  });
});
