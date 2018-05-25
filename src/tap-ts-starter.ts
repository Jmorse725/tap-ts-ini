// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export default class DummyClass {}
/** hack for https://github.com/TypeStrong/typedoc/issues/603 */

var read = require('utils-fs-read-ini')

/*  utils-fs-read basic use

var read = require( 'utils-fs-read-ini' );

read( './testdata/ini/test.ini', onData );
 
function onData( error, data ) {
    if ( error ) {
        console.error( error );
    } 
    else {
        console.log( JSON.stringify(data) );
    }
}*/

console.log('tap-ts-starter running')

/**
 * This module is the entry point for local execution as a Singer tap (see the [spec](https://github.com/singer-io/getting-started/blob/master/SPEC.md))
 */
import * as configLoader from './tap-load-config'
import * as parseIni from './parse-ini'
import * as scanDir from './scan-dir'

var globalClass = async () => {
  try {
    var configObjs = await configLoader.loadConfig()
    return scanDir.scanDir(configObjs, parseIni.parseItem)
  } catch {
    var error = (error: any) => {
      // Handle errors
      console.error('Error: ', error)
      return error
    }
  }
}

globalClass()
