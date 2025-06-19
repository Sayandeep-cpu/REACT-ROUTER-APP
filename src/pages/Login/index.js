import { useAuth } from "../../context/auth-context";

export const Login = () => {

    const { isLoggedIn, setIsLoggedIn } = useAuth()

    const onLoginClick = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    
    return(
        <>
        <h1>This is Login Page</h1>
        {
            !isLoggedIn &&  <label> Mobile No. :
            <input placeholder=" enter mobile number" maxLength={10} />
        </label>
        }
        <button onClick={onLoginClick}>{!isLoggedIn ? 'Login' : 'Logout'}</button>
        </>
    )
}