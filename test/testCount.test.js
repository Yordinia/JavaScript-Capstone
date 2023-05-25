// import counter from '../src/modules/counter.js';
const { JSDOM } = require('jsdom');
const { experiments } = require('webpack');

const dom = new JSDOM('<!doctype html><html><body> this is <button> in a button </button> text</body></html>');
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;

const hr = () => {
  console.log('````````````````````````````````````````');
};
let x = 0;
console.log('running test', JSDOM, x);

describe('Count Test', () => {
  test('count ', () => {
    x += 1;
    //console.log('this is dom', dom);
    hr();
    // console.log('this is dom window', dom.window);
    // hr()
    // console.log('this is dom window navigator', dom.window.navigator);
    // hr()
    console.log('this is dom.window.document', dom.window.document);
    //hr();
    console.log('this is dom.window.document.body.textcont', dom.window.document.body.textContent);
    hr();
    // expect(x).toBe(1)
  });
});

// const testA = () => {
// console.log('this is test A')
// return true;
// }

// const testB = () => {
// console.log('this is test B')
// return true;

// }
// const desc = () => {
//     testA();
//     testB();
// }

// describe ('Testing Like Count',desc);