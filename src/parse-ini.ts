/** Parse MIME files using [Nodemailer.Mailparser](https://nodemailer.com/extras/mailparser/)
 *
 */ /** hack for https://github.com/TypeStrong/typedoc/issues/603 */
//var test = {a:'', b:''};
/* 
Updated mailparser to 2.2.0 to avoid malicious getcookies module; see https://blog.npmjs.org/post/173526807575/reported-malicious-module-getcookies
Consider mailparse (https://github.com/javascriptlove/mailparse) for the future, since mailparser will no longer be maintained. Mailparse does not yet have any TypeScript types available.
*/

console.log('parse-ini running')
var x
import * as anyJson from 'any-json'
//var mp = mailparser.MailParser; // low-level parser
// higher-level parser (easier to use, not as efficient)

import * as tapTypes from './tap-types'
import { stringify } from 'querystring'
import { AnyLengthString } from 'aws-sdk/clients/comprehend'

/** Convert the Mime message into json */
export async function parseItem(test: Buffer) {
  let doWork = function(iniObj: any) {
    let rec = new tapTypes.streamRecord()
    rec.stream = 'ini'
    rec.time_extracted = new Date()
    rec.record = iniObj
    return rec
  }
  //return anyJson.decode(test.toString('utf8'), 'ini').then(doWork) // works: promise.then version
  let parsed = await anyJson.decode(test.toString('utf8'), 'ini')
  //anyJson.decode returns a promise
  return doWork(parsed)
}
