import { useEffect, useState } from 'react'
const Hello = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((res) => setState(res))
    }, [])
    return <div>

        <p>u imported me dynamically !</p>
        <ul>
            {
                state.map((e, i) =>
                    <li>{e.title}</li>
                )
            }

        </ul>
    </div>
}

export default Hello