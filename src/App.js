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
import AnimeSearch from "./components/AnimeSearch";
import animeSearchReducer from "./reducers/anime-search-reducer";
import OtherUserProfile from "./components/OtherUserProfile";
import Following from "./components/Following";
import followingReducer from "./reducers/following-reducer";
import UserSearch from "./components/UserSearch";

const store = configureStore({
    reducer: {
        userData: userReducer,
        animeSearch: animeSearchReducer,
        following: followingReducer
    },
});


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <CurrentUser>
                    <div>
                        <Routes>
                            <Route index element={<HomeScreen/>}/>
                            <Route path="/search" element={<AnimeSearch/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/profile" element={<ProfileItem/>}/>
                            <Route path="detail/:id" element={<AnimeDetailScreen/>}/>
                            <Route path="edit-profile" element={<EditProfile/>}/>
                            <Route path="/profile/:usid" element={<OtherUserProfile/>}/>
                            <Route path="/follow/:usid" element={<Following/>}/>
                            <Route path="/searchUsers/:usid" element={<UserSearch/>}/>
                        </Routes>
                    </div>
                </CurrentUser>
            </BrowserRouter>
        </Provider>

    )
}

export default App;