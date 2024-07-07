//@ts-check

/** @typedef
    * {
    typeof
    * ABC [
         number
    * ]
    }
           *       Ch -
   this
 - still
 * works
*/
// ↑ ERROR, highlighted as a comment, but processed

const ABC = /** @type {const} */(["a", "b", "c"]);
	
/** @type {Ch}
*/
// ↑ ERROR, highlighted as a comment, but processed
var x = 'd';

/** @type {Ch} */
// ↑ OK, highlighted
var y = 'd';

// as so: https://github.com/microsoft/TypeScript-TmLanguage/issues/467
