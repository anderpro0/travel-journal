import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {

    const element = data.map((modData)=> {
        return <Card 
        key={modData.id}
        img={modData.imageUrl}
        title={modData.title}
        location={modData.location}
        googleMapUrl={modData.googleMapsUrl}
        startDate={modData.startDate}
        endDate={modData.endDate}
        description={modData.description}
        />
    })
  return (
    <main>
        <Navbar />
        {element}
        
    </main>
  )
}

export default App