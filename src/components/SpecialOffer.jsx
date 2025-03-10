export default function SpecialOffer() {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="relative w-full h-[620px] flex overflow-hidden">
          {/* Left Side */}
          <div className="w-[45%] bg-yellow-600 flex items-center justify-center relative">
            <h1 className="text-3xl font-bold text-black z-10">
              SPPECIAL <br />
              <span className="text-white">OFFER</span>
            </h1>
            <div className="absolute right-[-25%] top-0 bottom-0 w-[60%] bg-yellow-700 skew-x-[-25deg]"></div>
          </div>
  
          {/* Right Side */}
          <div className="w-[55%] bg-herocolor p-8 flex flex-col justify-center text-white relative">
            <div className="h-1 w-24 bg-yellow-500 mb-4"></div>
            <p className="text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
            </p>
            <button className="mt-6 px-6 py-2 border border-white text-white hover:bg-white hover:text-purple-800 transition-all">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    );
  }
  