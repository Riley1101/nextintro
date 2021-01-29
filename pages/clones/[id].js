import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Clone = (props) => {
    const route = useRouter()

    return (
        <div>
            <h1>Url Query is {route.query.id}</h1>

            {
                route.query.id !== '6' ? <Link href={`/clones/${Number(route.query.id) + 1}`}>
                    <h2>Click me to go to next one </h2>
                </Link> : <h2 onClick={() => route.replace(`/clones/${Number(route.query.id) + 1}`)}>I am 6 skip me </h2>
            }




        </div >
    )
}

export default Clone