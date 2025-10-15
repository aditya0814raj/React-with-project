import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App | CHAi</h1>
    </div>
  )
}

const anotherUser="chai aur react"
const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank' },
  'Click me to visit google',
  anotherUser
)
createRoot(document.getElementById('root')).render(

  reactElement
)
