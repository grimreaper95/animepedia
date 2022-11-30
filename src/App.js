import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import ProfileItem from "./components/ProfileComponent/profile-item";
import Register from "./components/register"
import HomeScreen from "./components/HomeComponent/index";
import userReducer from "./reducers/user-reducer";

import { configureStore }
    from '@reduxjs/toolkit';

const store = configureStore(
    {reducer: {userData: userReducer}});


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route index element={<HomeScreen />} />
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile" element={<ProfileItem/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>

    )
}

export default App;