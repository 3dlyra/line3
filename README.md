# Line3
This library is a line3 part of the 3DLyra's math library.
### Installation
```
npm i @3dlyra/line3
```
### Example
```JavaScript
import * as Line3 from "@3dlyra/line3"
import * as Vector3 from "@3dlyra/vector3"

const a = Vector3.create( - 5, 0, 0 )
const b = Vector3.create( 5, 0, 0 )

const line3 = Line3.create( a, b )

// Check intersection

console.log( Line3.intersectsPoint( line3, [ 0, 0, 0 ] ) ) // true
console.log( Line3.intersectsPoint( line3, [ 0, 0.5, 0 ] ) ) // false
console.log( Line3.intersectsPoint( line3, [ 0, 0.5, 0 ], 0.1 ) ) // true

//

const out = Line3.nearestPoint( line3, [ -2.5, 1, 0 ] )

// Nearest point
console.log( [ out[ 0 ], out[ 1 ], out[ 2 ] ] ) // [ -5, 0, 0 ]

// Perpendicular point
console.log( [ out[ 3 ], out[ 4 ], out[ 5 ] ] ) // [ -2.5, 0, 0 ]

// Center point
console.log( [ out[ 6 ], out[ 7 ], out[ 8 ] ] ) // [ 0, 0, 0 ]

// Time
console.log( nearest[ 9 ] ) // 0.25

```

### API
```TypeScript
// type vector3 = Float32Array( 3 ) [or use @3dlyra/vector3]
// type line3 = Float32Array( 6 )
// type result = Float32Array( 10 )

/*
	nearest point = [ out[ 0 ], out[ 1 ], out[ 2 ] ]
	perpendicular point = [ out[ 3 ], out[ 4 ], out[ 5 ] ]
	center point = [ out[ 6 ], out[ 7 ], out[ 8 ] ]
	time = out[ 9 ]
*/

quadratic( v3a: vector3, v3a: vector3 ): Float32Array;
intersectsPoint( line3: line3, v3: vector3, tolerance?: number ): boolean;
nearestPoint( line3: line3, v3: vector3 ): result;
```
