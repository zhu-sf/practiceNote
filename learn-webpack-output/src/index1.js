import {getName} from './home'
import man from './people';
getName(1231)
console.log(man)

import('./dynamic.js').then(_ => {
    console.log(_);
    _.default()
})