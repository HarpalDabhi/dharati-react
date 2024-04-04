import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutScreen from "./Pages/About Screen";
import AboutScreen2 from "./Pages/About Screen2";
import Assesories from "./Pages/Assesories";
import Categories from "./Pages/Categories Screen";
import Vlog from "./Pages/vlog";
import CropCategory from "./Pages/Crop Category";
import Help from "./Pages/Help";
import HomeScreen from "./Pages/HomeScreen";
import Login from "./Pages/Login";
import PriceScreen from "./Pages/Price Screen";
import RootcropCaregory from "./Pages/Rootcrop Category";
import Signup from "./Pages/Signup";
import Start from "./Pages/Start";
import Viewcatagory from "./Pages/Viewcatagory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/Signup" element={<Signup></Signup>}></Route>
          <Route path="/Start" element={<Start></Start>}></Route>
          <Route path="/HomeScreen" element={<HomeScreen></HomeScreen>}></Route>
          <Route
            path="/Viewcategory"
            element={<Viewcatagory></Viewcatagory>}
          ></Route>
          <Route
            path="/AboutScreen"
            element={<AboutScreen></AboutScreen>}
          ></Route>
          <Route
            path="/AboutScreen2"
            element={<AboutScreen2></AboutScreen2>}
          ></Route>
          <Route path="/Categories" element={<Categories></Categories>}></Route>
          <Route
            path="/CropCategory"
            element={<CropCategory></CropCategory>}
          ></Route>
          <Route
            path="/RootcropCaregory"
            element={<RootcropCaregory></RootcropCaregory>}
          ></Route>
          <Route path="/Assesories" element={<Assesories></Assesories>}></Route>
          <Route
            path="/PriceScreen"
            element={<PriceScreen></PriceScreen>}
          ></Route>
          <Route path="/Vlog" element={<Vlog></Vlog>}></Route>
          <Route path="/Help" element={<Help></Help>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
