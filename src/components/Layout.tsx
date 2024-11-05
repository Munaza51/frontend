import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;