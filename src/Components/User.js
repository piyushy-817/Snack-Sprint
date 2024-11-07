const User = (props)=>{
    return(
        <div className="aboutcard">
            <h1 >this is about page</h1>
            <h2>{props.name}</h2>
            <h4>{props.occupation}</h4>
            <h6>{props.role}</h6>
        </div>
    )

}

export default User;