import ReactHlsPlayer from 'react-hls-player';

const PlayerComponent = ({url}) =>{
    return(
        <ReactHlsPlayer
        src={url}
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
    />
    )
}

export default PlayerComponent