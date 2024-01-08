import React from "react";

function Tokenomics() {
  return (
    <div className="my-28 relative" id="Tokenomics">
      <div className="flex flex-col justify-center items-center">
        <p className="text-6xl">Tokenomics</p>
      </div>

      <img
          className="absolute opacity-50 left-16 rotate-12 w-96 -top-20 -z-50 max-[500px]:w-52"
          src="/banana1.png"
          alt=""
        />

      <div className="flex flex-col mt-10">
        <div className="flex justify-center items-center">
        <div className="shadow-[0_0_30px_10px] shadow-white border-2 border-white rounded-lg mb-4 py-3 px-10">
          <p className="text-3xl">Total Supply : 1,000,000,000 </p>
        </div>
        </div>
        <div className="flex justify-evenly items-center mt-10 max-[675px]:flex-col">
          <div className="flex flex-col justify-center items-center shadow-[0_0_30px_10px] shadow-white border-2 border-white rounded-lg py-4 px-10 max-[800px]:px-2 max-[675px]:mb-10">
            <p className="text-3xl">Team : 5% </p>
            <div className="w-72 border-b-2 my-5" />
            <p className="text-3xl">Marketing : 10%</p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-[0_0_30px_10px] shadow-white border-2 border-white rounded-lg py-4 px-10 max-[800px]:px-2">
             <p className="text-3xl">Presale : 60%</p>
            <div className="w-72 border-b-2 my-5" />
             <p className="text-3xl">Liquidity : 25%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
