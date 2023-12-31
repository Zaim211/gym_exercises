import { Box, Typography} from '@mui/material'
import React, { useContext } from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import ExerciseCard from './ExerciseCard'


const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography className='right-arrow' disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        <img src={LeftArrowIcon} alt='left-arrow'/>
      </Typography>
    );
  }
  
const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography className='left-arrow' disabled={isLastItemVisible} onClick={() => scrollNext()}>
        <img src={RightArrowIcon} alt='right-arrow'/>
      </Typography>
    );
  }


const HorizontalScrollbar = ({data , bodyPart, setBodyPart, isBodyParts}) => {
    
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m='0 40px'
            >
                {isBodyParts ? <BodyPart 
                  item={item} 
                  bodyPart={bodyPart} 
                  setBodyPart={setBodyPart}
                /> : <ExerciseCard exercise={item} />}
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar