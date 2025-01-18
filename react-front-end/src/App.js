import AppHeader from "./components/Header/AppHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSection from "./components/Header/ProfileSection/ProfileSection";
import Login from "./components/LoginPage/Login";
import { PageWrapper } from "./components/ListingPage/PageWrapper";
import AirbnbFooter from "./components/ListingPage/AirbnbFooter/AirbnbFooter";
import HomePageContainer from "./components/HomePage/HomePageWrapper";
import CreateListing from "./components/CreateListing/CreateListing";
import HostListing from "./components/HostListing/HostListing";
import UserListing from "./components/UserListing/UserListing";
import UserReservertions from "./components/UserReservations/UserReservertions";
import HostReservertions from "./components/HostReservations/HostReservertions";
import UpdateListing from "./components/UpdateListing/UpdateListing";

function App() {
  return (
    <div className="App">
      {/* <HostReservertions /> */}
      {/* <UserReservertions/> */}
      {/* <UserListing/> */}
      {/* <HostListing/> */}
      {/* <CreateListing/> */}
      {/* <HomePageContainer /> */}
      {/* <AppHeader />
      <PageWrapper />
      <AirbnbFooter /> */}

      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HostListing" element={<HostListing />} />
        <Route path="/CreateListing" element={<CreateListing />} />
        <Route path="/ViewListings" element={<HostListing />} />
        <Route path="/HostReservations" element={<HostReservertions />} />
        <Route path="/UserListing" element={<UserListing />} />
        <Route path="/UpdateListing" element={<UpdateListing />} />
        <Route path="/Listing" element={<PageWrapper />} />
        <Route path="/UserReservations" element={<UserReservertions />} />
      </Routes>
    </div>
  );
}

export default App;
