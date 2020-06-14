// write your CatList component here
import React, { Component } from 'react'

export class CatList extends Component {

    renderCatPics = () => {
        return this.props.catPics.map(catPic => <li key={catPic.id}><img src={catPic.url} /></li>)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    {this.renderCatPics()}
                </ul>
            </div>
        )
    }
}

export default CatList
