import React from 'react'
import styled from 'styled-components'
import {Catagories} from './Data';
import CatagoriesItem from './CatagoriesItem';
const Container = styled.div`
 display:flex;
 padding:20px;
 justify-content:space-between;
`

const Catagory = () => {
  return (
    <>
    <Container>
       {Catagories.map((item)=>(
        <CatagoriesItem item={item} key={item.id}/>
       ))}
    </Container>
    </>
  )
}

export default Catagory