import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal as ReactstrapModal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import { createActionCloseModal } from '../actions'

class Modal extends React.Component {
  render() {
    const { isModalOpen, multiplicationResult, closeModal } = this.props
    return (
      <ReactstrapModal isOpen={isModalOpen} toggle={closeModal} className={this.props.className}>
        <ModalHeader toggle={closeModal}>Result</ModalHeader>
        <ModalBody>
          The multiplication result is {multiplicationResult}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={closeModal}>Close</Button>
        </ModalFooter>
      </ReactstrapModal>
    );
  }
}

const mapStateToProps = state => ({
  isModalOpen: state.isModalOpen,
  multiplicationResult: state.multiplicationResult
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(createActionCloseModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
