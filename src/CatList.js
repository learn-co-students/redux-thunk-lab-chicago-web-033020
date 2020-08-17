import React, { Component } from 'react'

export class CatList extends Component {

  listCats = () => {
    return this.props.catPics.map( cat => <img key={cat.id} src={cat.url} />)
  }

  render() {
    return (
      <div>
        {this.listCats()}
      </div>
    )
  }
}

export default CatList



