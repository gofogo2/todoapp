import Lottie from "react-lottie";
import MainIcon from "./lotties/data.json";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MainIcon,
  };

  return (
    <div className="App">
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-slate-600 to-slate-800">
        <div className="bg-[#24253F] w-[20rem] h-[20rem] rounded-2xl flex flex-col">
          {/* <div className="flex-[0.4] bg-[#2f253F] rounded-t-2xl flex flex-row justify-between  items-center px-4"> */}
            {/* <div> */}
          <Lottie  options={defaultOptions} height={30} width={30} />
          {/* </div> */}
          {/* <div className="flex flex-row gap-2" >
            <div>All</div>
            <div>Active</div>
            <div>Completed</div>
          </div> */}
          
          {/* </div> */}
          {/* <div className="flex-1 bg-[#24253F]"></div>
          <div className="flex-[0.3] bg-[#2f253F]  rounded-b-2xl"></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
