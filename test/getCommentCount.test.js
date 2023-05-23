import getCommentCount from '../src/modules/getCommentCount.js';

describe('Comment Count', () => {
  test('Output should be ', () => {
    const comments = [];
    const output = getCommentCount(comments);
    expect(output).toBe(0);
  });
  test('Output should be 1', () => {
    const comments = [{ id: '1' }];
    const output = getCommentCount(comments);

    expect(output).toBe(1);
  });
});