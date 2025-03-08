import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import TermsOfService from "./components/TermsOfService";
import ContactUs from "./components/ContactUs";

function App() {
    return (
        <>
            <Provider store={appStore}>
                <BrowserRouter basename="/">
                    <Routes>
                        <Route path="/" element={<Body />}>
                            <Route path="/" element={<Feed />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route
                                path="/connections"
                                element={<Connections />}
                            />
                            <Route path="/requests" element={<Requests />} />
                        </Route>
                        <Route
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        />
                        <Route
                            path="/refund-policy"
                            element={<RefundPolicy />}
                        />
                        <Route
                            path="/terms-of-service"
                            element={<TermsOfService />}
                        />
                        <Route path="/contact-us" element={<ContactUs />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
