import { GlobalStyle } from "../styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NewTransaction from "./common/NewTransaction";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/money-in" element={<NewTransaction moneyIn />} />
                    <Route path="/money-out" element={<NewTransaction />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}