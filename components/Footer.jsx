import React from "react";

const Footer = () => {
  return (
    <div className="w-full -z-20 md:mt-[3rem] pb-[3rem] h-fit">
      <div className=" h-[27rem] z-20 flex justify-center place-items-center">
        <h1 className="text-violet-400 text-[1.7rem] md:text-[3.25rem] w-[20rem] md:w-[35rem] text-center">
          We give light so people can find the way
        </h1>
      </div>
      <div className="flex justify-center -z-30 relative -top-[21rem] md:-top-[23.25rem] bg-inherit">
        <div className="cir w-[29rem] md:w-[42rem] h-[10.5rem] md:h-[14.25rem] border-b-2 -mb-[20rem] border-gray-950 flex justify-center">
          <div className="cir2 w-[12.5rem] md:w-[18rem] h-[4.5rem] md:h-[5.5rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
