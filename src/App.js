import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import ProfileItem from "./components/profile/profile-item";
import Register from "./components/register"
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={ProfileItem}/>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App;