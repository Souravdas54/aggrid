import React from 'react'
import  {Image,Stack} from 'react-bootstrap';

export default function Imagerender(props) {
  return (
   <>
    <Stack direction='horizontal'>
        <Image rounded src={props.getValue()} style={{height:'50px'}}/>
    </Stack>
   </>
  )
}
