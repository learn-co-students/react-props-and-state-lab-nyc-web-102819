import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  constructor() {
    super()
    this.state = {
      pets: [],
      filter: null 
    }
    
  }

  componentDidMount() {
    console.log("did mounnt:", this.state.pets)
    this.setState({ 
      pets: this.props.pets,
      filter: this.props.filter
    })
  }

  showPets = (pets) => pets.map( (pet) => {
      // console.log("showpets",pet)
      return (<Pet 
        key = {pet.id}
        name = {pet.name}
        type = {pet.type}
        gender = {pet.gender}
        age = {pet.age}
        weight = {pet.weight}
        isAdopted = {pet.isAdopted}
      />)
      
      }
    ) 

  

  render() {
    return <div className="ui cards">
      {this.showPets(this.props.pets)}
    </div>
  }
}

export default PetBrowser
 