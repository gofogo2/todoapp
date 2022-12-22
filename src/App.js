import Lottie from "react-lottie";
import MenuSelect from "./components/MenuSelect";
import MainIcon from "./lotties/data.json";

function App() {
  const onChangedMenu = (e) => {
    console.log(e);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MainIcon,
  };

  return (
    <div className="App">
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-slate-600 to-slate-800">
        <div className="bg-[#24253F] w-[20rem] h-[20rem] rounded-2xl flex flex-col">
          <div className="flex-[0.4] bg-[#2f253F] rounded-t-2xl flex flex-row justify-between  items-center px-4">
            <div>
              <Lottie options={defaultOptions} height={30} width={30} />
            </div>
            <div className="flex flex-row gap-2 text-[#CC732D] text-opacity-75 ">
              <MenuSelect
                value={1}
                title={"All"}
                groupName={"menu"}
                onChangedMenu={onChangedMenu}
              />
              <MenuSelect
                value={2}
                title={"Active"}
                groupName={"menu"}
                onChangedMenu={onChangedMenu}
              />
              <MenuSelect
                value={3}
                title={"Complete"}
                groupName={"menu"}
                onChangedMenu={onChangedMenu}
              />
            </div>
          </div>
          <div className="flex-1 bg-[#24253F]"></div>
          <div className="flex-[0.3] bg-[#2f253F]  rounded-b-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
