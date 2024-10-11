import Image from "next/image";

import tempImage from "../../../public/mock-profile-picture.webp";

const MainMenuProfile = () => {
  return (
    <div className="bg-pink-500">test</div>
    // <div className="bg-secondary-background flex flex-col items-center relative px-6 pt-6 rounded-2xl h-screen">
    //   <div className="w-full flex justify-between">
    //     <div className="h-8 w-8 bg-alert rounded-full" />
    //     <div className="h-8 w-8 bg-alert rounded-full" />
    //   </div>
    //   <Image
    //     alt="Profile Picture"
    //     className="rounded-full"
    //     height={64}
    //     src={tempImage}
    //     width={64}
    //   />
    //   <div className="w-full text-[24px] text-center mt-4">Brandon Chan</div>
    //   <div className="w-full flex flex-col justify-between items-center gap-4">
    //     <div className="w-full flex justify-between items-center bg-white mt-8 p-2 rounded-2xl">
    //       <div className="flex gap-2 items-center">
    //         <div className="h-8 w-8 bg-alert rounded-full" />
    //         <div className="">Classmates</div>
    //       </div>
    //       <div className="">&gt;</div>
    //     </div>
    //     <div className="h-[200px] w-full bg-white rounded-2xl flex flex-col gap-2 p-2">
    //       <div className="flex w-full justify-between items-center">
    //         <div className="">Activity</div>
    //         <div className="">Year</div>
    //       </div>
    //       <div className="text-[18px] font-bold w-full border-b-2 border-red-500">3.5 Hours Great Job!</div>
    //       <div className="w-full h-full bg-blue-500 text-white flex justify-center items-center">Some Sort of Activity Tracker</div>
    //     </div>
    //     <div className="w-full h-[350px] bg-white rounded-2xl flex flex-col gap-2 p-2 justify-between items-center">
    //       <div className="">Classes</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MainMenuProfile;
