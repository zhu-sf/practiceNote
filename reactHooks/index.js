// import { useState, useCallback } from 'react'
const { useState, useCallback, useRef, useEffect } = React
const domContainer = document.querySelector('#root')
function Parent(params) {
    
    const [age, setAge] = React.useState(19)
    const handleAge = useCallback((age) => {
        setAge(age)
    }, [])
    return (
        <div>
            <p>{age}</p>
            <Son onChangeAge={handleAge} />
        </div>
    )
}

const Son = React.memo(props => {
    console.log('update son', props)
    const sonAge = useRef(1)
    const handleClick = () => {
        sonAge.current += 1
        props.onChangeAge && props.onChangeAge(sonAge.current)
    }
    return <div onClick={handleClick}>213123</div>
})

// function App() {
//     const [val, setVal] = useState("123123");

//     const onChange = useCallback(evt => {

//         setVal(evt.target.value);
//       }, []);

//     return <div>
//         <p onClick={}>{val}</p>
//         <input val={val} onChange={onChange} />;
//     </div>
//   }

// let count = 0

// function App() {
//     const [val, setVal] = useState('')

//     const onChange = evt => {
//         setVal(evt.target.value)
//     }

//     return <input val={val} onChange={onChange} />
// }

// function Child({ val, getData }) {
//     useEffect(() => {
//         getData()
//     }, [getData])

//     return <div>{val}</div>
// }
ReactDOM.render(<Parent />, domContainer)
