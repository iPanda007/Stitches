import React from 'react'
import { styled } from './ui/stitches.config'
import { Text } from './ui/text'

const Title = styled('h1',{
  color:"$accentColour",
  fontSize:'$100',

})

const App = () => {
  return (
    <div>
        <Title>Aung Kyaw Khaing</Title>
        <Text Color="red" Gradient Disabled>Introduction to Stitches</Text>
    </div>
  )
}

export default App
