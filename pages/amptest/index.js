import { useAmp } from 'next/amp'
export const config = { amp: 'hybrid' }
import styles from './amp.module.css'
const AMp = () => {
    const isAmp = useAmp();
    const date = new Date();
    return (
        <div style={{ backgroundColor: '#fff', width: "100%", height: "100vh" }}>
            {isAmp ? (
                <h1>Hello with amp mobile</h1>
            ) : (
                    <h1>Without Amp web</h1>
                )}

            <p>Some time: {date.toJSON()}</p>
            <amp-timeago
                width="0"
                height="15"
                datetime={date.toJSON()}
                layout="responsive"
            >
                .
            </amp-timeago>
            <amp-accordion class="sample">
                <section expanded>
                    <h4>Section 1</h4>
                    <p>Bunch of awesome content.</p>
                </section>
                <section>
                    <h4>Section 2</h4>
                    <div>Bunch of even more awesome content. This time in a
                         <code>
                            <div></div>
                        </code></div>
                </section>
                <section>
                    <h4>Section 3</h4>
                    <figure>
                        <amp-img src="/static/samples/img/clean-1.jpg"
                            layout="responsive"
                            width="400"
                            height="710"></amp-img>
                        <figcaption>Images work as well.</figcaption>
                    </figure>
                </section>
            </amp-accordion>

            <amp-carousel
                type="carousel"
                role="region"
                aria-label="Basic usage carousel">
                <amp-img src="https://amp.dev/static/samples/img/image1.jpg"
                    width="400"
                    height="300"
                    alt="a sample image"></amp-img>
                <amp-img src="https://amp.dev/static/samples/img/image2.jpg"
                    width="400"
                    height="300"
                    alt="another sample image"></amp-img>
                <amp-img src="https://amp.dev/static/samples/img/image3.jpg"
                    width="400"
                    height="300"
                    alt="and another sample image"></amp-img>
            </amp-carousel>
            <amp-facebook width="552"
                height="310"
                layout="responsive"
                data-embed-as="video"
                data-href="https://www.facebook.com/zuck/videos/10102509264909801/">
            </amp-facebook>
            <amp-sidebar id="sidebar1"
                class="sample-sidebar"
                layout="nodisplay"
                side="right">
                <h3>Sidebar</h3>
                <button on="tap:sidebar1.close">Close sidebar</button>
                <button on="tap:sidebar1.toggle">Toggle sidebar</button>
            </amp-sidebar>
            <button on="tap:sidebar1.toggle">Toggle sidebar</button>
            <button on="tap:sidebar1.open">Open sidebar</button>

        </div>
    )
}
export default AMp