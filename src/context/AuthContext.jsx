import React,{createContext,useState,useEffect} from 'react'

export const AuthContext =createContext();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(
        localStorage.getItem("user") || null
    );

    useEffect(()=>{
        if(user){
            localStorage.setItem("user",user);
        }
        else{
            localStorage.removeItem("user");
        }
    },[user]);

    const login =(email,password)=>{
        if(email ==="admin@gmail.com" && password === "1234"){
            setUser(email);
            return true;
        }
        return false;
    };

    const logout=()=>{
        setUser(null);
    }


  return (
    <div>
      <AuthCountext.Provider value={{user,login,logout}}>
        {childeren}

      </AuthCountext.Provider>
    </div>
  )
}

export default AuthProvider;
