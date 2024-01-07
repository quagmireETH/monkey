import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function HowTo() {
  const CustomLeftArrow = ({ onClick }) => (
    <button onClick={() => onClick()} className="custom-left-arrow">
      {"<"}
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button onClick={() => onClick()} className="custom-right-arrow">
      {">"}
    </button>
  );

  return (
    <div className="h-full pb-28 relative mt-28" id="$MONKE">
      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl">How To Get $MONKE</p>
      </div>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="pl-16 max-[390px]:pl-12"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            partialVisibilityGutter: 40,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1325 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1325, min: 885 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 885, min: 0 }, // Adjust these values as needed
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        <div className="p-4 w-96 shadow-[0_0_30px_0] bg-black bg-opacity-60 shadow-white rounded-xl my-10 max-[500px]:w-72">
          <div className="border-b-2 w-full mb-2">
            <p className="text-2xl">Create a Wallet</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-xl text-center">
              You can download a metamask wallet or any other type of your
              choice from the app store or google play store for free. Desktop
              users, download the google chrome extension by going to
              metamask.io or again any other wallet of your choice.
            </p>
            <img className="w-52 mt-4" src="/swap/MetaMask.png" alt="" />
          </div>
        </div>

        <div className="p-4 w-96 shadow-[0_0_30px_0] bg-black bg-opacity-60 shadow-white rounded-xl my-10 max-[500px]:w-72">
          <div className="border-b-2 w-full mb-2">
            <p className="text-2xl">Get some eth</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-xl text-center">
              Now get Some ETH by buying them or swapping stablecoin into eth to
              be able to switch to $MONKE. If you don&apos;t have any ETH, you
              can buy directly on metamask, transfer from another wallet, buy on
              another exchange or ask to a friend to send you some and send it
              to your wallet.
            </p>
            <img className="w-28 mt-4" src="/swap/eth.png" alt="" />
          </div>
        </div>

        <div className="p-4 w-96 shadow-[0_0_30px_0] bg-black bg-opacity-60 shadow-white rounded-xl my-10 max-[500px]:w-72">
          <div className="border-b-2 w-full mb-2">
            <p className="text-2xl">Go to Uniswap</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-xl text-center">
              Now go connect your wallet into to Uniswap. Be sure to always use
              a burner! Go to app.uniswap.org in google chrome or on the browser
              inside your Metamask app. Connect your wallet. Paste the $MONKE
              token address into Uniswap, select MONKE, and confirm. When
              Metamask prompts you for a wallet signature, you can sign, but
              always double check.
            </p>
            <img className="w-32 mt-4" src="/swap/uniswap.webp" alt="" />
          </div>
        </div>

        <div className="p-4 w-96 shadow-[0_0_30px_0] bg-black bg-opacity-60 shadow-white rounded-xl my-10 max-[500px]:w-72">
          <div className="border-b-2 w-full mb-2">
            <p className="text-2xl"> Swap your ETH for $MONKE</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-xl text-center">
              Now switch your ETH for $MONKE. We have ZERO taxes so you
              don&apos;t need to worry about buying with a specific slippage,
              although you may need to use slippage during times of market
              volatility.
            </p>
            <img className="w-52 mt-4" src="/monk.png" alt="" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HowTo;
