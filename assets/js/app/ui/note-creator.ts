import {
	Component,
	Output,
	EventEmitter
} from '@angular/core';

@Component( {
	selector: 'note-creator',
	styles: [`
		.note-creator {
			padding: 20px;
			background-color: white;
			border-radius: 3px;
		}
		.title {
			font-weight: bold;
			color: rgba(0,0,0,0.8);
		}
		.full {
			height: 100px;
		}
	`],
	template: `
		<div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color }">
			<form class="row" (submit)="onCreateNote()">
				<input
					type="text"
					[(ngModel)]="newNote.title"
					name="newNoteTitle"
					placeholder="Title"
					class="col-xs-10 title"
					*ngIf="expandForm"
				>
				<input
					type="text"
					(focus)="toggle( true )"
					[(ngModel)]="newNote.value"
					name="newNoteValue"
					placeholder="Take a note..."
					class="col-xs-10"
				>
				<div class="actions col-xs-12 row between-xs" *ngIf="expandForm">
					<div class="col-xs-3">
						<color-picker
							[colors]="colors"
							(selected)="onColorSelect( $event )"
						>
						</color-picker>
					</div>
					<button
						type="submit"
						class="btn-light"
					>
					Done
					</button>
				</div>
			</form>
			<pre>{{ newNote | json }}</pre>
		</div>
	`
} )

export class NoteCreator {
	@Output() createNote = new EventEmitter();
	colors: string[] = ['#005787', '#0190DF', '#00A4FF', '#0088D4', '#003654'];
	newNote = {
		title: '',
		value: '',
		color: 'white'
	};
	expandForm: boolean = false;

	onCreateNote() {
		const { title, value, color } = this.newNote;

		if ( title && value ) {
			this.createNote.next( { title, value, color } );
		}

		this.reset();
		this.toggle( false );
	};

	reset() {
		this.newNote = {
			title: '',
			value: '',
			color: 'white'
		};
	};

	toggle( value: boolean ) {
		this.expandForm = value;
	};

	onColorSelect( color: string ) {
		this.newNote.color = color;
	}
}
