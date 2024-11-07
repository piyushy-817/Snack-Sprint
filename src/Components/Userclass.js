import React from "react";

class UserClass extends React.Component {
  constructor(props){
    super(props);
    this.state={
    userInfo :{
      name : "Null",
      bio : "Null",
      avatar_url : "Blank"
    }
     
    } 
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/piyushy-817")
    const JSon = await data.json()
    console.log(JSon)
    
    this.setState({
      userInfo : JSon
    })
  }
 
  render() {
    
    const {name,bio,avatar_url} = this.state.userInfo;
    

    return (
      <div className="aboutcard">
        <h1>this is Class Component</h1>
      
        <img src={avatar_url}></img>
        <h4>{name}</h4>
        <h6>{bio}</h6>
      </div>
    );
  } 
}

export default UserClass;
