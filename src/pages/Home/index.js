import { useNavigate } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();

    const onGoCartClick = () => {
        navigate('/cart');
    }

    return(
        <>
        <h1>This is Home Page</h1>
        <button onClick={onGoCartClick}> Go to Cart</button>
        </>
    )
}