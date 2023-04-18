import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from "i18next";
import { ToastContainer } from 'react-toastify';

// Common
import Header from './common/header/Header.jsx';
import PageNotFound from './common/PageNotFound.jsx';
import MainPage from './main-page/MainPage.jsx';
import Footer from './common/footer/Footer.jsx';
import Success from './common/Success.jsx'
import Coupon from './profile/coupon/Coupon.jsx'
import Contact from "./common/header/Contact.jsx"
import About from  "./common/header/About.jsx"
import Spinner from './common/Spinner.jsx';

// FullMainItemPage
import EventPage from './event-page/EventPage.jsx';
import UserProfilePage from './profile/UserProfilePage.jsx';
import MyTicket from './user/MyTicket.jsx';

// Auth
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import EmailConfirm from './auth/EmailConfirm.jsx';
import PassReset from './auth/PassReset.jsx';
import PartnerRegister from './auth/partner-register/PartnerRegister.jsx';

// Admin panel
import AdminPage from './admin-panel/AdminPage.jsx';
import OrganizationPage from './admin-panel/OrganizationPage.jsx';
import ModeratorPage from './admin-panel/ModeratorPage.jsx';

import clientRoutes from '../routes/client/clientRoutes.js';
import adminRoutes from '../routes/client/adminRoutes.js';
import moderatorRoutes from '../routes/client/moderatorRoutes.js';
import organizationRoutes from '../routes/client/organizationRoutes.js';
import { useUserProfile } from '../../hooks/user/useUserProfile.js'
import UserContext from '../context/UserContext.js'
import 'react-toastify/dist/ReactToastify.css';
import './css/app.css';

  
const App = () => {
  const token = localStorage.getItem('token');
  const { isLoading, userInfo, isError } = !token ? { isLoading: false, userInfo: { values: 'guest' } }: useUserProfile();

  return isLoading ? <Spinner /> : (
    <I18nextProvider i18n={i18next}>
      <UserContext.Provider value={{currentUser: userInfo?.values || 'guest'}}>
        <BrowserRouter>
          <Header />
          <main className='flex-[1_0_auto] dark:bg-gray-900 '>
            <Routes>
              <Route path={clientRoutes.mainPagePath()} element={<MainPage />} />

              {/* Sral Vilsan */}
              <Route path="/event/:id" element={<EventPage />} />
              <Route path="/MyTicket" element={<MyTicket />} />
              <Route path="/success" element={<Success />} />
              <Route path="/coupon" element={<Coupon />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              {/* neSral Vilsan */}

              {/* Auth */}
              <Route path={clientRoutes.loginPagePath()} element={<Login />} />
              <Route path={clientRoutes.registerPagePath()} element={<Register />} />
              <Route path={clientRoutes.confirmEmailPagePath()} element={<EmailConfirm />} />
              <Route path={clientRoutes.passResetPagePath()} element={<PassReset />} />
              <Route path={clientRoutes.partnershipRegisterPagePath()} element={<PartnerRegister />} />
              <Route path={clientRoutes.profilePagePath()} element={<UserProfilePage />} />

              {/* Admin routes */}
              <Route path={adminRoutes.mainPagePath()} element={<AdminPage dataCategory="users" />} />
              <Route path={adminRoutes.usersPagePath()} element={<AdminPage dataCategory="users" />} />
              <Route path={adminRoutes.rolesPagePath()} element={<AdminPage dataCategory="roles" />} />
              <Route path={adminRoutes.eventsPagePath()} element={<AdminPage dataCategory="events" />} />
              <Route path={adminRoutes.categoriesPagePath()} element={<AdminPage dataCategory="categories" />} />
              <Route path={adminRoutes.ticketsPagePath()} element={<AdminPage dataCategory="tickets" />} />
              <Route path={adminRoutes.couponsPagePath()} element={<AdminPage dataCategory="coupons" />} />
              <Route path={adminRoutes.organizationsPagePath()} element={<AdminPage dataCategory="organizations" />} />

              {/* Moderator routes */}
              <Route path={moderatorRoutes.mainPagePath()} element={<ModeratorPage />} />

              {/* Organization routes */}
              <Route path={organizationRoutes.mainPagePath()} element={<OrganizationPage />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </UserContext.Provider>
    </I18nextProvider>
  );
};

export default App;
