import {useEffect,useState} from "react"
import {useRouter} from "../../hooks/router";
import axios from "axios";
import Channel from "../../components/channel/Channel";

const ChannelList = () =>{
    const router = useRouter()
    const userToken = JSON.parse(localStorage.getItem("token"));
    const [videoData,setVideoData] = useState([])

    useEffect(() =>{
        if(!userToken){
            router.push("/")
        }else {
            axios.post('http://185.223.125.144:4000/admin/channels/get',{
                token:userToken
            }).then(res=>{
               setVideoData(res.data.message.rows)
            })
                .catch(err=>console.log(err))
        }
    },[])

    const goToVideoHandler = (e) =>{
        localStorage.setItem("url",JSON.stringify(e.url))
        router.push("/player-component")
    }
    return(
        <div className={'MainChannelList'}>
            {videoData.map((e,i)=>{
                return(
                    <Channel goToVideoHandler={goToVideoHandler} e={e} key={i}/>
                )
            })}

        </div>
    )
}

export default ChannelList