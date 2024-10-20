// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './Pages/Hero/ProfileCard.css'
import { Header } from './Static/Home/Header'
import { ProfileCard } from './Pages/Hero/ProfileCard'
function App() {
  

  return (
    <>
      <div>
        <Header />
        <ProfileCard heading = "Name: Braimoh-Igbo Idris"  bio= " Age: 18" location="Location: Lagos" image ="../public/9555ba4d-69c6-41df-a924-28971f04620a.jpeg" change = "card1" />

        <ProfileCard heading = "Name : Braimoh-Igbo Ibrahim"  bio= "Age: 24" location="Location:  Lagos" image ="../public/IMG_6074.jpeg" change = "card2" />

        <ProfileCard heading = "Name: Hamzah Alagbe"  bio= "Age: 25" location="Location: Lagos" image ="../public/IMG_4538.jpeg"  change = "card3"/>

      </div>
      
    </>
  )
}

export default App
