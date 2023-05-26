import counter from './mock/counter';


const testCountZero = () => {
  const likesElementLength = counter();
  expect(likesElementLength).toBe(0);
};

const testCountThree = () => {
  const ele = `
    <div>
    <p class="heart" id="50101"> likes </p>
    <p class="heart" id="50102"> likes </p>
    <p class="heart" id="50103"> likes </p>
    </div>
`;
  document.body.innerHTML = ele;
  const likesElementLength = counter('.heart');

  expect(likesElementLength).toBe(3);
};
const description = () => {
  it('test A', testCountZero);
  test('test B', testCountThree);
};

describe('Testing Like Count', description);