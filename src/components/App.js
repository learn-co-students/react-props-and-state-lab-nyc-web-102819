import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
      pets: [],
      filters: {
        type: 'all'
      }
  }

  onChangeType = (event) => {
    event.persist()
    console.log('inside onChangeType', event.target.value)
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        })
        console.log(this.state.pets)
      })
    } else if (this.state.filters.type === 'cat') {
      fetch('/api/pets?type=cat')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        })
        console.log(this.state.pets)
      })
    } else if (this.state.filters.type === 'dog') {
      fetch('/api/pets?type=dog')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        })
        console.log(this.state.pets)
      })
    } else if (this.state.filters.type === 'micropig') {
      fetch('/api/pets?type=micropig')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        })
        console.log(this.state.pets)
      })
    }
  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? { ...pet, isAdopted: true } : pet
    })
    this.setState({ pets: pets })
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={id => this.onAdoptPet(id)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
