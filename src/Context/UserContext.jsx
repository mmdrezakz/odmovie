import axios from "axios";
import { Children, createContext, useEffect} from "react";
import {useState } from "react";
import { Api_Key, Defualt_Url } from "../Tmdb";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const Context = createContext()


export default function UserProvider({children}){
        const navigate =  useNavigate()
        const [user,setUser] = useState(null)
        const[Session , setSession] = useState(() => localStorage.getItem("session")  )

           async function getUserData() {
  try {
    const { data } = await axios.get(`${Defualt_Url}account?api_key=${Api_Key}&session_id=${Session}`)
    setUser(data)
  } catch (error) {
    console.error("خطا در دریافت اطلاعات کاربر:", error)
    setUser(null)
    setSession(null)
    localStorage.removeItem("session")
    navigate("/login")
  }
}

            useEffect(() => {
                if(Session){
                    getUserData() 
                }
            },[Session])

                async function login(username,password) {
                    // console.log(username, "success");
                    try {
                    const tokenResult = await axios.get(`${Defualt_Url}authentication/token/new?api_key=${Api_Key}`)
                    // console.log(tokenResult.data.request_token);
                    
                    const authorize = await axios.post(`${Defualt_Url}authentication/token/validate_with_login?api_key=${Api_Key}`,{
                        username: username,
                        password: password,
                        request_token: tokenResult.data.request_token
                    })
                    
                    const session = await axios.post(`${Defualt_Url}authentication/session/new?api_key=${Api_Key}`,{ request_token: tokenResult.data.request_token  })

                    console.log(session.data.session_id);

                    setSession(session.data.session_id)

                    localStorage.setItem('session', session.data.session_id);
                    navigate("/",{replace:true})
                    toast.success("ورود با موفقیت انجام شد ..",{ style: {
                    borderRadius: '10px',
                    background: '#272525',
                    color: '#00ff00',
                    },})


                    } catch  {
                        toast.error("اطلاعات نادرست است .",{ style: {
                         borderRadius: '10px',
                         background: '#272525',
                         color: '#00ff00',
                        },})
                    }
                }

    return<Context.Provider value={{user,login,Session,setSession,setUser}}>{children}</Context.Provider>
}