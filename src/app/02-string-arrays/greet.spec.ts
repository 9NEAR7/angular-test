import {greet} from './greet'

describe('greet', () => {
  it('should include the name in the message', () => {
    expect(greet('9NEAR7')).toBe('Welcome 9NEAR7');
  })
});