import React, { useState, useEffect } from "react";
import ScrollButton from "./ScrollButton";
import Link from "next/link";

function MobileNav({ open, setOpen }) {
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    // Render the MobileNav component only after mounting on the client-side
    setShouldRender(true);
  }, []);

  return shouldRender ? (
    <div
      className={`fixed top-0 bottom-0 right-0 h-screen w-[37%] z-30 bg-[#F9B422] element transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col justify-start items-start mt-10 p-5">
        <a className="my-4 border-b-2 border-black w-full">
          <ScrollButton targetId="$MONKE">
            <p className="text-2xl mb-4">How to get $MONKE</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b-2 border-black w-full">
          <ScrollButton targetId="Tokenomics">
            <p className="text-2xl mb-4">Tokenomics</p>
          </ScrollButton>
        </a>
        <img
          src="/etherscan-logo-light-circle.svg"
          className="w-8 my-2 mb-4 cursor-pointer"
          alt=""
        />
        <img src="/tgAsset_22.svg" className="w-8 mb-4 cursor-pointer" alt="" />
        <Link href="https://x.com/monkecoin_eth">
          <img
            src="/twAsset_21.svg"
            className="w-8 my-2 cursor-pointer"
            alt=""
          />
        </Link>
      </div>
    </div>
  ) : null;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden max-[900px]:contents">
      <MobileNav open={open} setOpen={setOpen} />
      <div>
        <div
          className="group z-50 relative w-9 h-6 cursor-pointer flex-col justify-between items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 bg-[#DB5E1E] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"}`}
          />
          <span
            className={`h-1 bg-[#DB5E1E] rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 bg-[#DB5E1E] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"} ${
              open ? "mt-[19px]" : ""
            } ${open ? "mr-[2px]" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
