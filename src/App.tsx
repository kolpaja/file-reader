import React from 'react'
import './App.css'
import Header from './components/Header'

type props = {
  children: React.ReactNode
}

function App({ children }: props) {

  return (
    <div className="App">
      <Header />
      <div className='content'>
        {children}
      </div>
      <footer>
        <span>
          code with love by
          <a
            href='https://linktr.ee/kolpaja'
            title='kolpaja links'
            target='_blank'
          >
            @kolpaja
          </a>
        </span>
      </footer>
    </div>
  )
}

export default App
