import PlayerComponent from "../../components/player-component/PlayerComponent";
import {useEffect} from "react"
import {useRouter} from "../../hooks/router";

const Player = () =>{
    const url = JSON.parse(localStorage.getItem("url"))
    const userToken = JSON.parse(localStorage.getItem("token"))
    const router = useRouter()

    useEffect(()=>{
        if(!userToken){
            router.push("/")
        }
    },[])

    return(
        <div>
            <PlayerComponent url={url}/>
        </div>
    )
}

export default Player