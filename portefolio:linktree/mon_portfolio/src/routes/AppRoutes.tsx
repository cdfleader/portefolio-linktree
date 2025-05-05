import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, PortfolioPage, LinkTreePage, CvPage, ProfilePage } from '../pages';
import { Layout } from '../components/layout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><LinkTreePage /></Layout>} />
      <Route path="/design" element={<Layout><HomePage /></Layout>} />
      <Route path="/portefolio" element={<Layout><PortfolioPage /></Layout>} />
      <Route path="/cv" element={<Layout><CvPage /></Layout>} />
      <Route path="/profil" element={<Layout><ProfilePage /></Layout>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;