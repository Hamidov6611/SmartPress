import { useNavigate } from "react-router-dom"
import logo from '../../../assets/logo.png'
import { useEffect, useState } from "react"
import Cookies from "js-cookie"

const AdminLogin = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [admin, setAdmin] = useState([])

    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        try {
            Cookies.set("admin", JSON.stringify({login, password}))
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let isAdmin = Cookies.get('admin')
        if(isAdmin?.length > 0) {
            setAdmin(JSON.parse(isAdmin))
        }else {
            setAdmin([])
        }
    }, [])
    return !admin?.login ? (
        <div className={`w-[100%] h-[100vh] flex justify-center items-center bg-slate-400`}>
            <form onSubmit={submitHandler} className={`w-[95%] mx-auto md:w-[50%] shadow-2xl flex flex-col p-4 rounded-2xl bg-slate-200`}>
                <div className={`w-[300px] mx-auto h-[99px]`}>
                    <img src={logo} width={''} alt="logo" />
                </div>
                <p className={`font-montserrat text-[28px] text-[#343434] text-center my-4`}>Login to SmartPress Admin Page</p>
                <input 
                className={`border-[#004CB2] outline-[#004CB2] font-montserrat rounded-lg w-[95%] md:w-[70%] mx-auto focus:border-[#004CB2] p-3 my-4`} placeholder="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                />
                <input 
                className={`border-[#004CB2] outline-[#004CB2] font-montserrat rounded-lg w-[95%] md:w-[70%] mx-auto focus:border-[#004CB2] p-3 my-4`} placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className={`my-4 bg-[#004CB2] w-[50%] font-montserrat text-[20px] md:w-[30%] mx-auto text-white py-3 rounded-lg`}>Login</button>
            </form>
        </div>
    ) : navigate('/dashboard')
}

export default AdminLogin