import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

//import { auth } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children}: Props) => {
    const isSignedIn = localStorage.getItem("isSignedIn")
    const navigate = useNavigate();
    useEffect(() => {
        if (!isSignedIn) {
            navigate("../")
            
        }
    }, [])
    return (
        <>{children}</>
    
  )
}

export default AuthChecker