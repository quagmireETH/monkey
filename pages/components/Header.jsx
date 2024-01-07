import React from "react";
import ScrollButton from "./ScrollButton";
import Link from "next/link";
import Navbar from "./BurgerNav";

function Header() {
  return (
    <div className="bg-black bg-opacity-60 flex justify-between items-center py-6 border-b-2 border-white px-6">
      <div className="flex justify-center items-center max-[900px]:hidden">
        <Link href="https://x.com/monkecoin_eth">
        <img className="w-8 cursor-pointer mr-4" src="/twAsset_21.svg" alt="" />
        </Link>
        <img className="w-8 cursor-pointer mr-4" src="/tgAsset_22.svg" alt="" />
        <img
          className="w-8 cursor-pointer"
          src="/etherscan-logo-light-circle.svg"
          alt=""
        />
      </div>

      <div className="flex justify-between items-center max-[900px]:hidden">
        <ScrollButton targetId="$MONKE">
          <p className="cursor-pointer text-2xl mr-32 hover:text-[#cacaca] active:text-white">
            How to get $MONKE
          </p>
        </ScrollButton>
        <ScrollButton targetId="Tokenomics">
          <p className="cursor-pointer text-2xl hover:text-[#cacaca] active:text-white">
            Tokenomics
          </p>
        </ScrollButton>
      </div>

      <div className="flex justify-end items-center mr-10">
          <button className="cursor-pointer text-lg border-4 rounded-2xl px-6 pt-1 border-[#ffffff] hover:bg-[#DB5E1E] active:bg-[#ffffff]">
            <p>Buy Now</p>
          </button>
      </div>

      <Navbar />
    </div>
  );
}

export default Header;
