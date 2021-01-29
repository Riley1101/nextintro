import React, { useState, useEffect } from 'react'
import styles from './Dynamic.module.css'
import dynamic from 'next/dynamic'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const DynamicComponentWithCustomLoading = dynamic(
    () => import('./hello'),
    { loading: () => <p>I am loading</p> }
)

const Dynamic = () => {
    const [theme, setTheme] = useState(styles.theme_one)
    let theme1 = styles.theme_one

    const [images, setImages] = useState([])
    useEffect(() => {

        fetch('http://www.splashbase.co/api/v1/images/latest')
            .then(res => res.json())
            .then(res => setImages(res.images))
    }, [])

    return (
        <div className={styles.dynamic_container}>
            <div className={styles.dyn_btn}>
                <button onClick={() => setTheme(styles.theme_one)}>One</button> <button onClick={() => setTheme(styles.theme_two)}>Two</button>
            </div>

            <div className={theme}>
                <div>
                    Hello FOod
                </div>
                <div>
                    Hello FOod
                </div>
                <div>
                    Hello FOod
                </div>
                <div>
                    Hello FOod
                </div>
                <div>
                    Hello FOod
                </div>

                <div>
                </div>
            </div>

            {/* <DynamicComponentWithCustomLoading /> */}
            {
                images.map((e, i) =>
                    <div key={i} className={styles.long}>
                        <LazyLoadImage
                            width={300}
                            height={300}
                            alt={e.id}
                            effect="blur"
                            src={e.url} />
                        <br></br>
                    </div>

                )
            }
            <iframe width="1905" height="816" src="https://www.youtube.com/embed/au18BfiSUaY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Dynamic;