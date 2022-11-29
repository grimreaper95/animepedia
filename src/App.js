import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import ProfileItem from "./components/profile/profile-item";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/profile" element={ProfileItem}/>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App;