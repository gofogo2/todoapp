import Lottie from "react-lottie";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LayoutContainer from "./components/LayoutContainer";
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

  const menuProps = [
    {
      key: 1,
      value: 1,
      title: "All",
      groupName: "menu",
      onChangedMenu: onChangedMenu,
    },
    {
      key: 2,
      value: 2,
      title: "Active",
      groupName: "menu",
      onChangedMenu: onChangedMenu,
    },
    {
      key: 3,
      value: 3,
      title: "Complete",
      groupName: "menu",
      onChangedMenu: onChangedMenu,
    },
  ];

  return (
    <div className="App">
      <LayoutContainer>
        <Header>
          <div>
            <Lottie options={defaultOptions} height={30} width={30} />
          </div>
          <div className="flex flex-row gap-2 text-[#CC732D] text-opacity-75 ">
            {menuProps.map((item) => {
              return <MenuSelect {...item} />;
            })}
          </div>
        </Header>
        <Body></Body>
        <Footer></Footer>
      </LayoutContainer>
    </div>
  );
}

export default App;
