const Channel = ({goToVideoHandler,e}) =>{
    return(
        <div onClick={()=>goToVideoHandler(e)}>
            <img src={e.image} alt={e.image}/>
            <p>{e.name}</p>
        </div>
    )
}

export default Channel