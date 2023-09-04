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
        <div className="contact-card">
            <img src={user.avatar_url} className="profile-pic"></img>
            <h3 className="user-info">Name: {user.name}</h3>
            <p className="user-info">{user.bio}</p>
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
