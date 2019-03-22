import React from 'react'
import { connect } from 'react-redux'

import { createActionFetchStart } from '../actions'

class Button extends React.Component {
  render() {
    const { isInputValid, isFetchPending, handleSubmit } = this.props
    return (
      <button 
        className="btn btn-block btn-success" 
        onClick={handleSubmit}
        disabled={!isInputValid || isFetchPending}>
        {isFetchPending ? (
          <div>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </div>
        ) : (
          'Click me!'
        )}
      </button>
    )
  }
}

const mapStateToProps = state => ({
  isInputValid: state.isInputValid,
  isFetchPending: state.isFetchPending
})

const mapDispatchToProps = dispatch => ({
  handleSubmit: () => dispatch(createActionFetchStart()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
