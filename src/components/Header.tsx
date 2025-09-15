import React from 'react';
import { Home, Settings, Phone } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

const Header = () => {
  const navItems = [
    { name: 'Inicio', url: 'inicio', icon: Home },
    { name: 'Servicios', url: 'servicios', icon: Settings },
    { name: 'Contacto', url: 'contacto', icon: Phone }
  ];

  return <NavBar items={navItems} />;
};

export default Header;