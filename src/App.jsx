import './App.css'
import data from './data'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Hero from './components/Hero'

function App() {

  const cards = data.map(item => {
    return(
      <Card  key={item.id} {...item}/>
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards--list'>
        {cards}
      </section>
    </div>
  )
}

export default App
