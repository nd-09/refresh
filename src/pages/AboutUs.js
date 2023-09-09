import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        myD:"kolavari D",
        song:"change over",
        user:""
    }
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/nd-09");
    const jsonData= await data.json();
    this.setState({
      user:this.state.user=jsonData
    })
  }

  render() {
    const {details}=this.props
    const{myD,song,user}=this.state;
        return (
      <>
        <p>{details}</p>
        <p>{myD}</p>
        <p>This is your Playground Enjoy.{song}</p>
        <div className="contact-card w-64 border border-solid border-black hover:scale-110 m-10 p-5 h-[30rem] bg-stone-50 hover:bg-gray-100">
            <img src={user.avatar_url} className="profile-pic rounded-full"></img>
            <h3 className="user-info mt-10 p-2">Name: {user.name}</h3>
            <p className="user-info p-2" >{user.bio}</p>
        </div>
        <button onClick={()=>{
            this.setState({
                song:this.state.song= " Prefect"
            })
        }}>Click Me!</button>
      </>
    );
  }
}

export default AboutUs;
