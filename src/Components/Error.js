
import { useRouteError } from "react-router-dom";


const Errorpge = ()=>{
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1>OOps! Something Went Wrong</h1>
            <h3>{error.status}, {error.statusText}</h3>
        </div>
    )
}

export default Errorpge;