import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import ProfileItem from "./components/ProfileComponent/profile-item";
import Login from "./components/login"
import Register from "./components/register"
import HomeScreen from "./components/HomeComponent/index";
import AnimeDetailScreen from "./components/AnimeDetail/index"
import userReducer from "./reducers/user-reducer";
import {configureStore}
    from '@reduxjs/toolkit';
import EditProfile from "./components/EditProfile";
import CurrentUser from "./components/CurrentUser";

const store = configureStore(
    {reducer: {userData: userReducer}});


function App() {
    return (
            <Provider store={store}>
                <BrowserRouter>
                        <CurrentUser>
                        <div className="container">
                            <Routes>
                                <Route index element={<HomeScreen/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/register" element={<Register/>}/>
                                <Route path="/profile" element={<ProfileItem/>}/>
                                <Route path="detail/:id" element={<AnimeDetailScreen/>}/>
                                <Route path="edit-profile" element={<EditProfile/>}/>
                            </Routes>
                        </div>
                        </CurrentUser>
                </BrowserRouter>
            </Provider>
    )
}

export default App;