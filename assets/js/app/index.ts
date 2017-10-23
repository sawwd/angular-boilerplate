import * as services from './services';
export { App } from './app';

const mapValuesToArray = ( obj: any ) => Object.keys( obj ).map( key => obj[ key ] );

export const Providers = [
	...mapValuesToArray( services )
];
