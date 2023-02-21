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

const line = Line3.create( a, b )

// Check intersection

console.log( Line3.intersectsPoint( line, [ 0, 0, 0 ] ) ) // true
console.log( Line3.intersectsPoint( line, [ 0, 0.5, 0 ] ) ) // false
console.log( Line3.intersectsPoint( line, [ 0, 0.5, 0 ], 0.1 ) ) // true
```

### API
```TypeScript
// type vector3 = Float32Array( 3 ) [or use @3dlyra/vector3]
// type line3 = Float32Array( 6 )

quadratic( v3a: vector3, v3a: vector3 ): Float32Array;
intersectsPoint( line: line3, v3: vector3, tolerance?: number ): boolean;
```
