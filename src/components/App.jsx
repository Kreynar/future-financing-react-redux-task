import React from 'react'

import './App.css'
import Input from './Input'
import Button from './Button'
import Modal from './Modal'

class App extends React.Component {
  render() {
    return (
      <div className="justify-content-center full-height align-items-center row bg-dark">
        <div className="p-0 col-10 col-md-4">
          <div className="card text-center border-success mb-3">
            <div className="card-body">
              <Input />
              <Button />
              <Modal />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
