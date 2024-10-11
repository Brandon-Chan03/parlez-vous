import Sidebar from "@/components/home/Sidebar";
import MainContent from "@/components/home/MainContent";
import MainMenuProfile from "@/components/home/MainMenuProfile";

const Home = () => {
  return (
    <div className="relative w-screen h-screen bg-blue-500">
      <div className="absolute top-5 right-5 bottom-5 left-5 bg-red-500 grid grid-cols-[75px_1fr_400px]">
        <Sidebar />
        <MainContent />
        <MainMenuProfile />
      </div>
    </div>
  );
};

export default Home;
