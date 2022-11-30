import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import HomeScreen from "./components/HomeComponent/index";
import ProfileItem from "./components/ProfileComponent/profile-item";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <p>Welcome</p>
                <Routes>
                    <Route index element={<HomeScreen />} />
                    <Route path="/profile" element={ProfileItem}/>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App;