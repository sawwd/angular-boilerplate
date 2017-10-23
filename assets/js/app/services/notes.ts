import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class NoteService {
	path: string = '/notes';

	constructor( private api: ApiService ) {}

	createNote( note: any ) {
		return this.api.post( this.path, note );
	};

	getNotes() {
		return this.api.get( this.path );
	};

	completeNote( note: any ) {
		return this.api.delete( `${ this.path }/${ note.id }` );
	};
}
