import React from 'react';
import HeaderClient from './HeaderClient';

interface NavItem {
  text: string;
  href: string;
}

interface HeaderProps {
  language: string;
  toggleLanguage: () => void;
  navContent: NavItem[];
  isLangChanging: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  return <HeaderClient {...props} />;
};

export default Header;
