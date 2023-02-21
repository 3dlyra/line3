export function create( v3a, v3b ) {

	return new Float32Array( [ ...v3a, ...v3b ] )
}

export function intersectsPoint( line3, v3, tolerance ) {

	tolerance = tolerance || 0

	const AB = Math.sqrt( ( line[ 0 ] - line[ 3 ] ) ** 2 + ( line[ 1 ] - line[ 4 ] ) ** 2 + ( line[ 2 ] - line[ 5 ] ) ** 2 )
	const AP = Math.sqrt( ( line[ 0 ] - v3[ 0 ] ) ** 2 + ( line[ 1 ] - v3[ 1 ] ) ** 2 + ( line[ 2 ] - v3[ 2 ] ) ** 2 )
	const BP = Math.sqrt( ( line[ 3 ] - v3[ 0 ] ) ** 2 + ( line[ 4 ] - v3[ 1 ] ) ** 2 + ( line[ 5 ] - v3[ 2 ] ) ** 2 )

	return Math.abs( AB - ( AP + BP ) ) <= tolerance
}
