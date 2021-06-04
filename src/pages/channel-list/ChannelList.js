import {useEffect,useState} from "react"
import {useRouter} from "../../hooks/router";
import axios from "axios";

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
        <div>
            {videoData.map((e,i)=>{
                return(
                    <div onClick={()=>goToVideoHandler(e)} key={i}>
                        <img src={e.image} alt={e.image}/>
                        <p>{e.name}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default ChannelList