
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {Toaster} from "react-hot-toast";

export default function App(){

    return(
        <ChakraProvider>
    <BrowserRouter>
        <Toaster position ="bottom-right"/>
        <Routes>
        <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>
           </ChakraProvider>
    );
}


//128
//Routes is a form of URL management