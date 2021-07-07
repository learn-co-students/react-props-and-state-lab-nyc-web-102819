import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      allPets: [],
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  componentDidMount()  {
    fetch('/api/pets')
    .then(resp => resp.json())
    .then(data => {
      console.dir("fetch done",data)
      this.setState({
        allPets: data,
        pets: data
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("update")
    // console.log("prevState",prevState)
    // console.log("state",this.state)
    console.log("prevState filter",prevState.filters.type)
    console.log("state filter",this.state.filters.type)

  }

  onChangeType = (breed) => {
    this.setState({
      filters: {type:breed}
    })
  }
  
  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      // *** without API call 
      // this.setState({
      //     pets: this.state.allPets
      //   })
        
        // *** with API call ***
      fetch( `/api/pets`)
      .then(resp => resp.json())
      .then( data => {
        this.setState({
          pets: data
        })
      })

    }else{
        //*** without API call ***
        // let filteredPets = this.state.allPets.filter(pet => {
        //   return pet.type === this.state.filters.type
        // })
        
      //   this.setState({
      //     pets: filteredPets
      // })

      // *** with API call ***
      fetch( `/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then( data => {
        this.setState({
          pets: data
        })
      })
    }
  } 

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeFilter = {this.onChangeType} executeFilter = {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} filter={this.state.filters.type} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
 