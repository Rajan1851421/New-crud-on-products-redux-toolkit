import React from "react";

function Service() {
  return (
    <div className="h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Replace the following placeholders with your actual service components */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h2 className="text-xl font-semibold mb-2">Service 1</h2>
            <p className="text-gray-700">Description of Service 1.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://images.pexels.com/photos/20344348/pexels-photo-20344348/free-photo-of-farmers-in-india.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h2 className="text-xl font-semibold mb-2">Service 2</h2>
            <p className="text-gray-700">Description of Service 2.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://images.pexels.com/photos/20392251/pexels-photo-20392251/free-photo-of-a-brown-butterfly-sitting-on-a-leaf-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h2 className="text-xl font-semibold mb-2">Service 3</h2>
            <p className="text-gray-700">Description of Service 3.</p>
          </div>
          {/* Add more service components as needed */}
        </div>
      </div>
    </div>
  );
}

export default Service;
