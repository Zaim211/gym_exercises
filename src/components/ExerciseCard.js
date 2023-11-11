import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Button, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack direction='row'>
            <Button 
                sx={{ml : '21px', color: '#fff',
                    background: '#ff9a9a', fontSize: '14px',
                    borderRadius: '20px', textTransform: 'capitalize'
                }}
            >
                {exercise.bodyPart}
            </Button>
            <Button
                sx={{ml : '21px', color: '#fff',
                background: '#fcc757', fontSize: '14px',
                borderRadius: '20px', textTransform: 'capitalize'
            }}
            >
                {exercise.target}
            </Button>
        </Stack>
        <Typography color="#000" ml="20px" 
            fontWeight="bold" mb="11px" pb="10px"
            textTransform="capitalize" fontSize="22px"
        >
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard