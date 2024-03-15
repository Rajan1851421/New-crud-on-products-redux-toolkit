import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAddress, selectedAddress } from "../../features/productSlice";

function AddressModal() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);
  const { address, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(selectAddress());
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSelect = (id) => {
    dispatch(selectedAddress(id));
  };

  return (
    <div className="flex items-center justify-center">
      {showModal && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-20"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="relative overflow-x-auto p-8 rounded-lg z-50 h-[60vh] w-full overflow-auto bg-pink-200">
              <div className="loading-container overflow-x-auto w-full" style={{ display: loading ? 'block' : 'none' }}>
                <div className="flex items-center justify-center h-full">
                  <p>Loading...</p>
                </div>
              </div>
              <div className="table-container" style={{ display: loading ? 'block' : 'block' }}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                  <thead className="sticky top-0 z-10 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th className="border border-gray-800 p-2">Name</th>
                      <th className="border border-gray-800 p-2">Email</th>
                      <th className="border border-gray-800 p-2">City</th>
                      <th className="border border-gray-800 p-2">Zip Code</th>
                      <th className="border border-gray-800 p-2">Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {address.data &&
                      address.data.map((ele, index) => (
                        <tr key={index} className="border border-gray-800 p-2">
                          <td className="border border-gray-800 p-2">{ele.name}</td>
                          <td className="border border-gray-800 p-2">{ele.email}</td>
                          <td className="border border-gray-800 p-2">{ele.address.city}</td>
                          <td className="border border-gray-800 p-2">{ele.address.zipcode}</td>
                          <td className="border border-gray-800 p-2">
                            <button className="bg-green-300 px-4 py-2 text-black" onClick={() => handleSelect(ele.id)}>
                              Select
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <button
                className="text-black fixed bottom-2 mx-auto bg-blue-700 mt-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AddressModal;
