import { Box } from '@mui/material'
import React from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import { useState } from 'react'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setBodyPart={setBodyPart} 
        bodyPart={bodyPart} 
        setExercises={setExercises}
      />
      <Exercises 
        exercises={exercises} 
        bodyPart={bodyPart} 
        setExercises={setExercises}
      />
    </Box>
  )
}

export default Home