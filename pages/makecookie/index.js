import { useCookies } from 'react-cookie';
import { useState } from 'react'
const MakeCookie = () => {
    const [cookie, BakeCookie] = useCookies(['name'])
    const [value, setValue] = useState('')

    return (
        <div>
            <h1>Thats how i bake cookie !</h1>

            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Make a cookie'></input>
            <button onClick={() => BakeCookie('name', value, { path: '/', })}>Save</button>

            <p>
                <h2>I am a cookie but dont eat me !</h2>
                {cookie.name}
            </p>
        </div>
    )
}

export default MakeCookie