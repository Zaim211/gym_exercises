import Pagination  from '@mui/material/Pagination'
import { Stack, Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader'


const Exercises = ({ bodyPart, exercises, setExercises}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (event, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
      setExercises(exercisesData)
    }

    fetchExercisesData();
  }, [bodyPart]);
  if (!currentExercises.length) return <Loader />;

  return (
    <Box
      id="#exercises"
      sx={{ mt: { lg: "100px" }}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb="50px">
        Showing Results
      </Typography>

      <Stack 
        direction="row" 
        sx={{ gap: { lg: '110px', sx: '50px'}}}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems="center">
        {exercises.length > 0 && (
          <Pagination 
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            onChange={paginate}
            page={currentPage}
            size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises