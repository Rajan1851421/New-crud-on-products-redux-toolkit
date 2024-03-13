import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div
        className="bg-gray-200 p-4 rounded-md overflow-auto"
        style={{ maxHeight: "400px" }}
      >
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          ipsum vel leo fermentum sagittis. Cras eget nisi vitae nisi pharetra
          dictum. Proin id vehicula eros, ac maximus elit. Integer in
          condimentum turpis, in fermentum nisl. Phasellus mollis, mi nec
          interdum pulvinar, libero mauris efficitur mi, vel condimentum lorem
          lorem id turpis. Nulla facilisi. Sed in bibendum justo, et fermentum
          eros. Cras non libero at magna rhoncus tristique a et libero. Cras ut
          nulla sit amet sapien eleifend posuere.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default ContactUs;
