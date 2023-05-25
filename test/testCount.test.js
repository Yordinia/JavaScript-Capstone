const { JSDOM } = require('jsdom');
import counter from './mock/counter.js'

let dom;
beforeEach(() => {
    // Arrange
    dom = new JSDOM('<!doctype html><html><body><h1> Testing count function!</h1></body></html>');
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
});


const testCountZero = () => {
  // Act
console.log('this is test A - testCountZero');
const likesElementLength = counter();

  // Asserstion
  expect(likesElementLength).toBe(0);

}

const testCountThree = () => {
console.log('this is test B - testCountThree')
   // Arrange
let ele = `
    <div>
    <p class="heart" id="50101"> likes </p>
    <p class="heart" id="50102"> likes </p>
    <p class="heart" id="50103"> likes </p>
    </div>
`
  // Act
document.body.innerHTML = ele;
const likesElementLength = counter('.heart');

  // Asserstion
expect(likesElementLength).toBe(3);

}
const description = () => {
    it('test A', testCountZero)
    test('test B', testCountThree)  
}

describe ('Testing Like Count', description);