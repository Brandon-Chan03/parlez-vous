const MainContent = () => {
  return (
    // <div className="flex flex-col gap-16 max-w-full h-full">
    //   <div>
    //     <div className="text-[48px]">
    //       Bienvenue aux futurs francophones
    //     </div>
    //     <div className="text-[36px] w-[60%]">
    //       An app designed to ease your language learning experience
    //     </div>
    //   </div>
    //   <div className="flex gap-4 max-w-full bg-black overflow-x-auto">
    //     <TempButton text="All" />
    //     <TempButton selected text="Verbs" />
    //     <TempButton text="Introductions and Greetings" />
    //     <TempButton text="Common Nouns" />
    //     <TempButton text="Prepositions" />
    //   </div>
    //   <div className="flex gap-4" />
    // </div>
    <div className="bg-red-500">
      test
    </div>
  );
};

const TempButton = ({ text = "Default", selected }) => {
  return (
    <button className={`flex items-center text-white rounded-full pl-2 pr-4 py-2 ${selected ? "bg-secondary-accent" : "bg-primary-accent"}`}>
      <div className="w-9 h-9 bg-white rounded-full mr-3" />
      <span className="">{text}</span>
    </button>
  );
};

export default MainContent;
