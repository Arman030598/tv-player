import '../../pages/channel-list/ChannelList.scss'

const Channel = ({goToVideoHandler,e}) =>{
    return(
        <div onClick={()=>goToVideoHandler(e)} className={'Card'}>
            <img src={e.image} alt={e.image}/>
            <p>{e.name}</p>
        </div>
    )
}

export default Channel