const PI = 3.14159265359;
/*
export function area(radius) {
	return (radius ** 2) * PI;
}

export function circumference(radius) {
	return 2 * radius * PI;
}
//import { area, circumference } from './circle.mjs';
*/

const area = (radius) => {
	return (radius ** 2) * PI;
}

const circumference = (radius) => {
	return 2 * radius * PI;
}

export default {area, circumference};
