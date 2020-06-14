import React, { Component } from "react"

// written as class component 
// class CatList extends Component {
  
//   renderCats = () => {
//     return this.props.cats.map(cat => <img src={cat.url}/>)
//   }

//   render() {
//     return (
//       <div>
//         {this.renderCats()}
//       </div>
//     )
//   }
// }

const CatList = (props) => {
  const renderCats = () => {
    return props.catPics.map(cat => <img src={cat.url}></img>)
  }

  return(
    <div>
      {renderCats()}
    </div>
  )
}

export default CatList