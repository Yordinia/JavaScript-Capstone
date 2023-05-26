import counter from './mock/counter.js';

const { JSDOM } = require('jsdom');

let dom; let
  hr;
beforeEach(() => {
  // Arrange
  dom = new JSDOM('<!doctype html><html><body><h1> Testing count function!</h1></body></html>');
  global.document = dom.window.document;
  global.window = dom.window;
  global.navigator = dom.window.navigator;
  hr = () => {
    console.log('````````````````````````````````````````');
  };
});

const testCountZero = () => {
  // Act
  console.log('this is test A - testCountZero');
  const likesElementLength = counter();
  hr();
  // Asserstion
  expect(likesElementLength).toBe(0);
};

const testCountThree = () => {
  console.log('this is test B - testCountThree');
  hr();
  // Arrange
  const ele = `
    <div>
    <p class="heart" id="50101"> likes </p>
    <p class="heart" id="50102"> likes </p>
    <p class="heart" id="50103"> likes </p>
    </div>
`;
  // Act
  document.body.innerHTML = ele;
  const likesElementLength = counter('.heart');

  // Asserstion
  expect(likesElementLength).toBe(3);
};
const description = () => {
  it('test A', testCountZero);
  test('test B', testCountThree);
};

describe('Testing Like Count', description);