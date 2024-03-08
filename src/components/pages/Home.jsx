import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, searchProduct } from '../../features/productSlice'
import { Link } from 'react-router-dom'

function Home() {
  const { loading, error, products } = useSelector(state => state.app)
  const dispatch = useDispatch()
  const [search, setSearch] = useState()

  console.log(search);

  useEffect(() => {
    dispatch(fetchProduct(search))

  }, [dispatch, search])
  if (loading) {
    return (
      <h2 className='text-center text-2xl  mt-[5rem] h-screen '>Loading.....</h2>
    )
  }

  return (
    <>
      <div>

        <div className=' fixed w-full mt-[-80px]'>
          <div className='md:w-1/2 lg:w-1/2 xl:w-1/2 sm:w-[90%] mx-auto'>
            <select
              id="search"
              name="search"
              value={search}
              onChange={(e) => { setSearch(e.target.value) }}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
              {/* Add your category options here */}
              <option value="">ALL Item</option>
              <option value="/category/smartphones">Smart Phone</option>
              <option value="/category/laptops">Laptop</option>
              <option value="/category/fragrances">Perfume</option>
              <option value="/category/skincare">Skin Care</option>
              {/* Add other categories as needed */}
            </select>

          </div>
        </div>



        <div className='mt-[150px]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4'>
            {products && products.map((item, index) => (
              <div key={index} className="antialiased text-gray-900">
                <div className="bg-gray-200">
                  <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                    {/* <!--E11--> */}
                    <img className="h-48 w-full object-cover object-end" src={item.thumbnail} alt="Home in Countryside" />
                    <div className="p-6">
                      <div className="flex items-baseline">
                        <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
                      </div>
                      <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{item.title}</h4>
                      <div className="mt-1">
                        <span className=' font-bold '>{`Rs. ${item.price}`}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(Math.floor(item.rating))].map((_, i) => (
                            <i key={i} className="fas fa-star text-yellow-600"></i>
                          ))}
                          {item.rating % 1 !== 0 && (
                            <i className="fas fa-star-half-alt  text-yellow-600"></i>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between my-2">
                        <Link to='' className="inline-block px-4 py-2 text-white bg-[#365314] rounded-full hover:bg-blue-700">
                          Buy now
                        </Link>
                        <Link to='' className="inline-block px-3 py-2 text-white bg-[#701A75] rounded-full hover:bg-blue-700">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



    </>



  )
}

export default Home
