import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../../features/productSlice'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])
const getProduct =()=>{
  dispatch(fetchProduct())
}
  return (
    <>
      <div className='h-screen'>
        <center>
          hello home page
          <button onClick={getProduct}>Click me</button>
        </center>

      </div>

    </>
  )
}

export default Home
