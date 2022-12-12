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
import randomAnimeReducer from "./reducers/random-anime-reducer";
import AdminHomePage from "./components/AdminHome";
import AdminLogin from "./components/AdminLogin";
import adminReducer from "./reducers/admin-reducer";
import reviewReducer from "./reducers/review-reducer";
import LikedAnime from "./components/LikedAnime";
import likedAnimeReducer from "./reducers/liked-anime-reducer";
import reviewerReducer from "./reducers/reviewer-reducer";

const store = configureStore({
    reducer: {
        userData: userReducer,
        animeSearch: animeSearchReducer,
        randomAnime: randomAnimeReducer,
        following: followingReducer,
        adminData: adminReducer,
        likedAnime: likedAnimeReducer,
        review: reviewReducer,
        reviewer: reviewerReducer
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
                            <Route path="/detail/:id" element={<AnimeDetailScreen/>}/>
                            <Route path="/edit-profile" element={<EditProfile/>}/>
                            <Route path="/profile/:usid" element={<OtherUserProfile/>}/>
                            <Route path="/follow/:usid" element={<Following/>}/>
                            <Route path="/searchUsers/:usid" element={<UserSearch/>}/>
                            <Route path="/admin" element={<AdminHomePage/>}/>
                            <Route path="/admin/login" element={<AdminLogin/>}/>
                            <Route path="/likes/all" element={<LikedAnime/>}/>
                        </Routes>
                    </div>
                </CurrentUser>
            </BrowserRouter>
        </Provider>

    )
}

export default App;