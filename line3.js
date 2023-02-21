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

export function nearestPoint( line3, v3 ) {

	const AP = ( line3[ 0 ] - v3[ 0 ] ) ** 2 + ( line3[ 1 ] - v3[ 1 ] ) ** 2 + ( line3[ 2 ] - v3[ 2 ] ) ** 2
	const BP = ( line3[ 3 ] - v3[ 0 ] ) ** 2 + ( line3[ 4 ] - v3[ 1 ] ) ** 2 + ( line3[ 5 ] - v3[ 2 ] ) ** 2

	const aSubB = [ line3[ 0 ] - line3[ 3 ], line3[ 1 ] - line3[ 4 ], line3[ 2 ] - line3[ 5 ] ]
	const bSubA = [ line3[ 3 ] - line3[ 0 ], line3[ 4 ] - line3[ 1 ], line3[ 5 ] - line3[ 2 ] ]
	const pSubA = [ v3[ 0 ] - line3[ 0 ], v3[ 1 ] - line3[ 1 ], v3[ 2 ] - line3[ 2 ] ]

	const AB = bSubA[ 0 ] ** 2 + bSubA[ 1 ] ** 2 + bSubA[ 2 ] ** 2
	const dot = pSubA[ 0 ] * bSubA[ 0 ] + pSubA[ 1 ] * bSubA[ 1 ] + pSubA[ 2 ] * bSubA[ 2 ]

	const perpendicular = [
		line3[ 0 ] + bSubA[ 0 ] * dot / AB,
		line3[ 1 ] + bSubA[ 1 ] * dot / AB,
		line3[ 2 ] + bSubA[ 2 ] * dot / AB
	]

	const centerPoint = [
		line3[ 0 ] - aSubB[ 0 ] / 2,
		line3[ 1 ] - aSubB[ 1 ] / 2,
		line3[ 2 ] - aSubB[ 2 ] / 2,
	]

	const endPoint = AP <= BP ? [ line3[ 0 ], line3[ 1 ], line3[ 2 ] ] : [ line3[ 3 ], line3[ 4 ], line3[ 5 ] ]

	const aDistanceToN = ( line3[ 0 ] - perpendicular[ 0 ] ) ** 2 + ( line3[ 1 ] - perpendicular[ 1 ] ) ** 2 + ( line3[ 2 ] - perpendicular[ 2 ] ) ** 2
	const bDistanceToN = ( line3[ 3 ] - perpendicular[ 0 ] ) ** 2 + ( line3[ 4 ] - perpendicular[ 1 ] ) ** 2 + ( line3[ 5 ] - perpendicular[ 2 ] ) ** 2
	const nDistanceToB = ( perpendicular[ 0 ] - line3[ 3 ] ) ** 2 + ( perpendicular[ 1 ] - line3[ 4 ] ) ** 2 + ( perpendicular[ 2 ] - line3[ 5 ] ) ** 2

	const isNegative = Math.sqrt( aDistanceToN ) + Math.sqrt( bDistanceToN ) > Math.sqrt( AB ) && aDistanceToN < bDistanceToN
	const time = Math.sqrt( aDistanceToN ) / Math.sqrt( AB )

	return new Float32Array( [
		...endPoint,
		...perpendicular,
		...centerPoint,
		isNegative ? - time : time,
	] )
}
