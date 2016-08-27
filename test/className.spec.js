import expect from 'expect';
import className from '../className';
describe('className', () => {
	it('should return empty string when the argument is an empty array', () => {
		expect(className([])).toBe('');
	});
	it('should return empty string when the argument is an empty object', () => {
		expect(className({})).toBe('');
	});
	it('should return empty string when the argument is an object whose all properties are false', () => {
		expect(className({
			tab: false
		})).toBe('');
	});
	it('should return empty string when all elements are the objects whose all properties are false', () => {
		expect(className([{
			tab: false
		}, {
			active: false
		}])).toBe('');
	});
	it('should return the string element of an array', () => {
		expect(className(['tab'])).toInclude('tab');
	});
	it('should return the string element of an array even if another object element with a corresponding false property', () => {
		expect(className(['tab', {
			tab: false
		}])).toBe('tab');
	});
	it('should return the true property', () => {
		expect(className(['tab', {
			tab: true
		}])).toBe('tab');
	});
	it('should return the true property of any element even if another object element with a corresponding false property', () => {
		expect(className([{
			tab: true
		}, {
			tab: false
		}])).toBe('tab');
	});
	it('should return only one string when the array has more than one identity string elements', () => {
		expect(className(['tab', 'tab'])).toBe('tab');
	});
	it('should return only one string when the array has a string element and another object element with a corresponding true property', () => {
		expect(className(['tab', {
			tab: true
		}])).toBe('tab');
	});
	it('should return only one string when the array has more than one object element with a same true property', () => {
		expect(className([{
			tab: true
		}, {
			tab: true
		}])).toBe('tab');
	});
	it('should return classNames separated by space', () => {
		expect(className(['tab', 'active'])).toBe('tab active');
	});
	it('should return classNames separated by space, when object has more true properties', () => {
		expect(className({
			tab: true,
			active: true
		})).toBe('tab active');
	});
	it('should return classNames separated by space, when more object has different true properties', () => {
		expect(className([{
			tab: true
		}, {
			active: true
		}])).toBe('tab active');
	});
});