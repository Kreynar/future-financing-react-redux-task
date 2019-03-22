import React from 'react'
import { connect } from 'react-redux'

import { createActionChangeInput } from '../actions'

class Input extends React.Component {
  handleInputChange = event => {
    this.props.handleInputChange(event.target.value)
  }
  render() {
    const { input } = this.props
    return (
      <div className="form-group">
        <input type="text" className="form-control" value={input} onChange={this.handleInputChange} />
      </div>
    )
  }
} 

const mapStateToProps = state => ({
  input: state.input
})

const mapDispatchToProps = dispatch => ({
  handleInputChange: text => dispatch(createActionChangeInput(text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)
