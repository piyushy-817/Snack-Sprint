import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Null",
        bio: "Null",
        avatar_url: "Blank",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/piyushy-817");
    const JSon = await data.json();
    console.log(JSon);

    this.setState({
      userInfo: JSon,
    });
  }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;

    return (
      <div>
        <div className="mt-10 mb-4 text-center font-manrope font-bold text-slate-600 text-5xl">About Page</div>
        <div className=" mt-4 mb-10 flex justify-center items-center ">
          <div className="mt-4 mb-4  shadow-lg shadow-slate-400 rounded-2xl  h-auto w-[500px]">
            <div className="flex justify-center">
              <img className="items-center rounded-2xl  " src={avatar_url}></img>
            </div>
            <div className="text-center mt-4">
              <h4 className="font-semibold font-caveat text-6xl">{name}</h4>
              <h6 className="mt-2 text-xl text-slate-600">{bio}</h6>
              <h6 className="mt-2 text-2xl text-red-400">Founder of Snack Sprint</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
