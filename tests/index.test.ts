import omit from '../src';
import {expect, test} from '@jest/globals';

describe('omit', () => {
  test('should create a shallow copy', () => {
    const benjy = { name: 'Benjy' };
    const copy = omit(benjy, []);
    expect(copy).toEqual(benjy);
  });

  test('should drop fields which are passed in', () => {
    const benjy = { name: 'Benjy', age: 18 };
    expect(omit(benjy, ['age'])).toEqual({ name: 'Benjy' });
    expect(omit(benjy, ['name', 'age'])).toEqual({});
  });
});
