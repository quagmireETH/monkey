import Header from "./components/Header";
import HowTo from "./components/HowTo";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative pb-24">
        <img
          className="absolute w-screen h-full -z-50"
          src="/Monkey_bg.jpg"
          alt=""
        />
        <Header />
        <div className="flex justify-center items-center mt-32">
          <div className="w-[900px] flex justify-center items-center flex-col max-[965px]:w-[800px] max-[845px]:w-[700px] max-[710px]:w-[600px] max-[625px]:w-[500px] max-[550px]:w-[400px] max-[430px]:w-[300px]">
            <div>
              <p className="shadow-[0_0_30px_10px] shadow-white border-4 border-white bg-[#DB5E1E] bg-opacity-50 rounded-md text-3xl px-3 py-1.5 text-center max-[585px]:text-4xl max-[465px]:text-3xl max-[400px]:px-1">
                Hang on to your bananas, because $MONKE is here to bring the
                laughter! We&apos;re the mischievous bunch that turns everyday
                moments into uproarious adventures. Chief banana-peeler and
                mastermind behind the madness, ready to tickle your funny bone!
              </p>
            </div>
            <div className="my-8 shadow-[0_0_30px_10px] shadow-white border-4 border-white bg-[#DB5E1E] bg-opacity-50 rounded-md py-1 px-2 mt-10">
              <p className="text-2xl text-center">
                Join us on this whimsical journey through the digital jungle,
                where we navigate the vines of absurdity with a touch of $MONKE
                charm. Expect daily doses of humor, a sprinkle of chaos, and, of
                course, plenty of bananas!
              </p>
            </div>
            <div className="flex justify-center items-center mt-24 max-[550px]:flex-col max-[550px]:mt-6">
              <Link>
                <button className="cursor-pointer border-4 rounded-2xl px-16 py-1.5 mr-10 border-[#ffffff] bg-[#DB5E1E] hover:bg-[rgba(24,163,75,0.7)] active:bg-[#ffffff] max-[710px]:px-10 max-[550px]:mr-0 max-[550px]:mb-10 max-[550px]:px-28">
                  <p className="text-xl">Dextools</p>
                </button>
              </Link>
              <Link>
                <button className="cursor-pointer border-4 rounded-2xl px-16 py-1.5 mr-10 border-[#ffffff] bg-[#DB5E1E] hover:bg-[rgba(24,163,75,0.7)] active:bg-[#ffffff] max-[710px]:px-10 max-[550px]:mr-0 max-[550px]:mb-10 max-[550px]:px-28">
                  <p className="text-xl">Uniswap</p>
                </button>
              </Link>
              <Link>
                <button className="cursor-pointer border-4 rounded-2xl px-12 py-1.5 border-[#ffffff] bg-[#DB5E1E] hover:bg-[rgba(24,163,75,0.7)] active:bg-[#ffffff] max-[710px]:px-6 max-[550px]:px-24">
                  <p className="text-xl">Dexscreener</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Tokenomics />
      <HowTo />
      <Footer />
    </div>
  );
}
