import { Component } from '@angular/core';

@Component( {
	selector: 'main-container',
	template: `
		<div clas="main-container">
			<app-bar></app-bar>
			<main class="main">
				<notes-container></notes-container>
			</main>
		</div>
	`
} )

export class Main {};
