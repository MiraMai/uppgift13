import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('shallow render', () => {
    shallow(<App/>);
});
    
test('shallow render', () => {
	shallow(<App/>);
});
	
test('renders heading', () => {
	// <h1>Hello</h1>
	let wrapper = shallow(<App/>);
	let actual = wrapper.contains(<h1 className={wrapper.state("color")}   >Hello</h1>);
	let expected = true;
	expect(actual).toBe(expected);
});  
// uppgift 13.1.1    
test('renders className', () => {
	// <h1>Hello</h1>
	let wrapper = shallow(<App/>);
	let actual = wrapper.find("h1").hasClass("uppgift13-1");
	let expected = true;
	expect(actual).toBe(expected);
});    
// uppgift 13.1.2
test('renders paragraph', () => {
	// <h1>Hello</h1>
	let wrapper = shallow(<App/>);
	let actual = wrapper.contains(<p> Uppgift 13.1 :lägga till html element</p>);
	let expected = true;
	expect(actual).toBe(expected);
}); 
//uppgift 13.1.3
test('renders event', () => {
	// <h1>Hello</h1>
	let wrapper = shallow(<App/>);
	wrapper.find("h2").simulate('click');
    let actual = wrapper.state("color");
	let expected = "uppgift13Event";
	expect(actual).toBe(expected);
});    
    