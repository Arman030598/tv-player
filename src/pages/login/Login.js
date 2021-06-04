import axios from 'axios'
import {useState} from "react"
import {useRouter} from "../../hooks/router";
import LoginForm from "../../components/login-form/LoginForm"
import "./Login.scss"

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleChange = (e) => {
        switch (e.target.name) {
            case "username" :
                setName(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break;
            default:
                break
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://185.223.125.144:4000/admin/login`,
            {
                email: name,
                password: password
            }
        )
            .then(res => {
                localStorage.setItem("token", JSON.stringify(res.data.message))
                router.push("/channel-list")
            })
            .catch(err => console.log(err))
    }
    return (
        <div className={"login"}>
            <LoginForm
                onSubmit={onSubmit}
                handleChange={handleChange}
            />
        </div>
    )
}

export default Login