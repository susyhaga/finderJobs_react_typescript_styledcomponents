import Header from './components/Header'
import Hero from './components/Hero'
import JobsList from './containers/JobsList'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <JobsList />
      </div>
    </>
  )
}

export default App

