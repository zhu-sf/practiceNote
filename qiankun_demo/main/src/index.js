import _ from 'lodash'
// import { registerMicroApps, start } from 'qiankun'
function component() {
    const element = document.createElement('div')
    element.innerHTML = _.join(['hello, mainApp~~'], ' ')
    return element
}

document.body.appendChild(component())

// registerMicroApps([
//     {
//         name: 'reactApp',
//         entry: '//localhost:3000',
//         container: '#root',
//         activeRule: 'app-react'
//     }
// ])

// start()
