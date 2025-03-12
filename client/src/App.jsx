
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {Toaster} from "react-hot-toast";
import {UserProvider} from "./context/UserContext.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Profile from "./pages/Profile.jsx";
import NavBar from "./components/NavBar.jsx";

export default function App(){

    return(
        <UserProvider>
        <ChakraProvider>
    <BrowserRouter>
            <NavBar/>
        <Toaster position ="bottom-right"/>
        <Routes>
        <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route element={<PrivateRoute/>}>
            <Route path="/profile" element={<Profile/>}/>
            </Route>

        </Routes>
    </BrowserRouter>
           </ChakraProvider>
        </UserProvider>
    );
}


//128
//Routes is a form of URL management