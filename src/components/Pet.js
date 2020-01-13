import React from 'react'

class Pet extends React.Component {

  state = {
    adopted: this.props.isAdopted
  }


  adoptPet = (event) => {

    if (event.target.textContent !== "Already Adopted") {
      console.log("button class old", event.target.className)
      event.target.className = "ui disabled button"
      event.target.textContent = "Already Adopted"
      console.log("button new class", event.target.className)
    }

  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender === "female"? '♀': '♂'}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content" >
          {this.props.isAdopted? <button className="ui disabled button">Already adopted</button> : <button onClick = {this.adoptPet} className= "ui primary button" >Adopt pet</button>}
          
          
        </div>
      </div>
    )
  }
}

export default Pet
 