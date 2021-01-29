import styles from './index.module.css'
import YouTube from 'react-youtube';
const Tube = () => {
    const opts = {
        height: '390',
        width: '640',
        start: '300',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    let _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    return (
        <div className={styles.tube_container}>
            <YouTube videoId="P8jOQUsTU9o" opts={opts} />
        </div>
    )
}

export default Tube