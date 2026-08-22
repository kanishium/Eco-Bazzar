import React from 'react'
import fifteen from "../assets/15.jpeg"
function Ecobazar() {
  return (
    <div>
      <div className="pl-20 w-screen h-96 flex justify-center mt-32 overflow-hidden ">
        <div
          className="bg-contain bg-no-repeat w-2/5 h-3/5 bg-center"
          style={{ backgroundImage: `url(${fifteen})` }}
        ></div>
      </div>
    </div>
  )
}

export default Ecobazar
