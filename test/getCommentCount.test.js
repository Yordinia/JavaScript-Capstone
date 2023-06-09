import getCommentCount from '../src/modules/getCommentCount';

describe('Comment Count', () => {
  test('Output should be 0', () => {
    const output = getCommentCount('.comment');
    expect(output).toBe(0);
  });

  test('Output should be 2', () => {
    document.body.innerHTML = '<div>'
    + '  <p class="comment">Azeem: Great work</p>'
    + '  <p class="comment">Misal: Very Nice </p>'
    + '</div>';
    const output = getCommentCount('.comment');

    expect(output).toBe(2);
  });
});