import React from 'react'
import Card from './components/Card.jsx'
import Text from './components/Text.jsx'
import Main from './components/Main.jsx'
const App = () => {
  const data = [
    {
      id:'1',
      image:'/pic-4.jpg'
    },
   {
    id:2,
      image:'/pic-2.jpg'
    }, 
    {
    id:3,
      image:'/pic-5.jpg'
    }, 
    {
    id:4,
      image:'/pic-1.jpg'
    },
     {
    id:5,
      image:'/pic-3.jpg'
    },
     {
    id:6,
      image:'/pic-6.jpg'
    },
]
  return (
    <div>
      <div className="outer">
        <Main/>
          <div className="main">
            <Text/>
            <div className="boxes">
    {
      data.map((data)=>{
        return(
          <Card data={data}/>
        )
      })
    }
    </div>
    </div>
    </div>
    </div>
  )
}

export default App