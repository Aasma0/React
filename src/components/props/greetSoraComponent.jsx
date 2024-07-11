import React from 'react'
import GreetComponent from './greetComponent'

const GreetSoraComponent = () => {
    const person = {
        name: 'Deeshri',
        caste: 'Thapa,'
    }
  return (
    <GreetComponent name='Deeshri' caste='Thapa'/>
  )
}

export default GreetSoraComponent
