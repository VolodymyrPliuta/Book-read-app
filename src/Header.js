import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="list-books-title">
        <h1>{this.props.title}</h1>
      </div>
    )
     
  }
}

export default Header
