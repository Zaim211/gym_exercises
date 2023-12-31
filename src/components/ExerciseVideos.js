import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name}) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
       Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>
        {name}
       </span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            target='_blank'
            rel='noreferrer'
            href={`https://youtube.com/watch?v=${item.video.videoId}`}
          >
            <img style={{ borderTopLeftRadius: '20px'}}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography fontWeight={600} color='#000' sx={{fontSize: {lg:'26px', xs: '16px'}}}>
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos