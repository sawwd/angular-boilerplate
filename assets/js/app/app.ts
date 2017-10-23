import { Component } from '@angular/core';

// Basic Types
/*var name: string = 'jen';
var age: number = 23;
var flag: boolean = false;

const log = ( item:string ): string => {
	return item;
}

// log('test');

// const names: number[] = [];
const names = [4];

names.push(3);

// Interfaces
interface BakedGood {
	sugar: number;
	name: string;
	bake( mins: number ): string;
	icing?: boolean;
}

const cake: BakedGood = {
	sugar: 23,
	name: 'cherry cake',
	bake( min:number ) {
		return `will be done in ${min}...`;
	}
};

// Classes
interface Vehicle {
	make: string;
	year: number;
	type: string;
	go(): void;
}

class Car implements Vehicle {
	type: string = '';

	constructor( public make: string, public year: number ) {
		this.make = make;
	}

	go(): void {
		
	}
}*/

// Decorators
// function clean( value: boolean ) {
// 	return function( target ) {
// 		target.cleaned = value;
// 	}
// }

// @clean( true )
// class Animal {

// }

// JavaScript Async Flow Control 


// Promises
// function done() {
//   console.log('I have all the titles', '\n');
// }
// getRandomSpaceTitle(function(data) {
//   console.log('Space Tilte: ', data, '\n')
// })
// getRandomCatTitle(function(data) {
//   console.log('Cat Tilte: ', data, '\n')
// })
// getRandomKittenTitle(function(data) {
//   console.log('Kitten Tilte: ', data, '\n')
// })
// done();

// // callback style
// function getRandomSpaceTitle(callback) {
//   getTitle('space')
//     .then(json => {
//       callback(json)
//     });
// }
// function getRandomCatTitle(callback) {
//   getTitle('cat')
//     .then(json => {
//       callback(json)
//     });
// }
// function getRandomKittenTitle(callback) {
//   getTitle('kitten')
//     .then(json => {
//       callback(json)
//     });
// }

// // Promises
// function getRandomSpaceTitlePromise() {
//   return getTitle('space')
// }
// function getRandomCatTitlePromise() {
//   return getTitle('cat')
// }
// function getRandomKittenTitlePromise() {
//   return getTitle('kitten');
// }

// // fetch example with promises
// function getTitle(title) {
//   return fetch('https://www.reddit.com/r/' + title + '.json')
//     .then(res => (res as any).json())
//     .then(json => json.data.children)
//     .then(posts => posts.map(post => post.data.title))
//     .then(json => {
//       var len = json.length;
//       var randomIndex = Math.floor(Math.random() * len);
//       return json[randomIndex];
//       //var toStringJson = JSON.stringify(json, null, 2);
//       //console.log('Reddit posts', toStringJson);
//     }); 
// }

// Observable
/*var $ = document.querySelector.bind(document);
var myInput = $('input');
var obs = Rx.Observable.fromEvent(myInput, 'input');
obs
.debounceTime(200)
.map(function(event) {
  return event.target.value;
})
.subscribe(function(value) {
  console.log(value);
});*/

@Component( {
	selector: 'app',
	template: `
		<div>
			<main-container></main-container>
		</div>
	`
} )

export class App {};
