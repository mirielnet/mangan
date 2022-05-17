import { Record as ImmutableRecord } from 'immutable';

import reducer from '../trends';

describe('trends reducer', () => {
  it('should return the initial state', () => {
    const result = reducer(undefined, {});
    expect(ImmutableRecord.isRecord(result)).toBe(true);
    expect(result.items.isEmpty()).toBe(true);
    expect(result.isLoading).toBe(false);
  });
});
