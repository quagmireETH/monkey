import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center mb-12 relative">
      <img
          className="absolute opacity-70 right-32 rotate-12 w-96 -top-28 -z-50 max-[535px]:right-10 max-[500px]:w-52"
          src="/banana3.png"
          alt=""
        />

      <div className="shadow-[0_0_30px_10px] shadow-white border-4 border-white mb-12 rounded-xl">
        <p className="text-4xl pb-2 pt-4 px-10">Disclaimer!</p>
      </div>
      <div className="w-5/6 shadow-[0_0_30px_10px] shadow-white border-4 border-white rounded-xl px-4 py-2 bg-[#F9812A]">
        <p className="text-center text-xl">
          $MONKE is a playful meme coin created purely for fun, without any
          inherent value or financial ambitions. There&apos;s no official team or
          roadmap, but we&apos;re committed to fostering a light-hearted and amusing
          atmosphere. Come join our community for a delightful experience, where
          the true value is in the joy of being part of a fun-loving community
          and the entertaining essence of the coin.
        </p>
      </div>
    </div>
  );
}

export default Footer;
