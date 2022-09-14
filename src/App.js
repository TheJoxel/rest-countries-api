import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import {ThemeContext} from "./context/themeContext";
import { AppState } from "./context/stateContext";
import { Body } from "./module/Body";
import { Details } from "./module/Details";




function App() {

  const {isDarkTheme} = useContext(ThemeContext);

  return (
      <AppState>
        <div className={`min-h-screen ${isDarkTheme ? "bg-bg-dark" : "bg-bg-lite"}`}>
          <BrowserRouter>
            <Menu/>
            <Routes>
              <Route path='/' element={<Body />}/>
              <Route path='/detail/:name' element={<Details />}/>
            </Routes>
          </BrowserRouter>
        </div>
      </AppState>
  );
}

export default App;
