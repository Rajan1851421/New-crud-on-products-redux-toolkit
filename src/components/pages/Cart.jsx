import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

import AddressModal from "./AddressModal";
import { removeCartItem } from "../../features/productSlice";

function Cart() {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.app);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {

  }, [])


  // Calculate total items and total price
  let totalItems = 0;
  let totalPrice = 0;

  if (cart && cart.length > 0) {
    cart.forEach((ele) => {
      totalItems++;
      totalPrice += ele.data.price;
    });
  }

  const hanleRemove = (id) => {
    dispatch(removeCartItem(id))
    console.log("Remove:", id);
  }

  const handleCheckout = () => {
    setIsModalOpen((prev) => !prev); // Open the modal when proceeding to checkout
  };

  return (
    <>
      <div className="mt-[4rem] container">
        <div className="flex justify-between mx-4 ">
          {/* 1st part */}







          <div className="flex flex-wrap flex-1 mt-6">
            {cart &&
              cart.map((ele, index) => (
                // <!-- component -->
                <div
                  key={index}
                  className="bg-white border  border-gray-200 p-2 w-80 max-w-3xl sm:w-full sm:p-4 h-45 shadow-lg flex flex-col sm:flex-row gap-5 select-none"
                >
                  <div>
                  <img
                      src={ele.data.thumbnail}
                      alt="product image"
                      className="w-14 rounded"
                    />
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-2 p-1">
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-600">
                      {ele.data.title}
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                      {ele.data.description.slice(0,20)}
                    </p>
                    <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                      {`Rs. ${ele.data.price}`}
                    </p>
                    <div className="flex gap-8">
                      <button onClick={() => hanleRemove(ele.data.id)}
                        className="ml-auto flex items-center gap-1 sm:text-lg border
                                         border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500"
                      >
                        <span >Remove</span>
                      </button>
                    </div>
                  </div>
                  
                </div>
              ))}
            {/* Button added below the cards */}
            <button
              className="fixed bottom-4 ml-5 bg-blue-500 text-white font-semibold py-2 px-4"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
          {/* 2nd part */}
          <div className="shadow-lg w-1/4 mt-10 p-4 bg-gray-100 ">
            <div style={{ position: "sticky", top: "4rem" }}>
              <p className="text-lg font-semibold">{`Total Items: (${totalItems})`}</p>
              <p className="my-1">Discount:</p>
              <p className=" mt-4 text-end font-bold text-xl">{`Total Price: ${totalPrice}`}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Render the AddressModal if isModalOpen state is true */}
      {isModalOpen && <AddressModal />}
    </>
  );
}

export default Cart;
