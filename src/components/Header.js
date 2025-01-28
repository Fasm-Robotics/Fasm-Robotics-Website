import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Drawer } from 'vaul';
//import folder for githubbutton the name is GitHubButton and the export name is Liquid
import { Liquid } from './GitHubButton';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5); /* Couleur noire semi-transparente */
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px); /* Safari */
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: gray;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

function ResponsiveHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>FASM Robotics</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/company">Company</NavLink>
        <NavLink to="/arm-available">Arm</NavLink>
        <NavLink to="/RoadMap">Roadmap</NavLink>
      </Nav>
      <div className="relative flex items-center justify-center w-24 h-4 rounded-lg overflow-hidden bg-black shadow-lg">
        <a
          href="https://github.com/Fasm-Robotics"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-full h-full"
        >
          <Liquid isHovered={false} />
          <span className="absolute z-10 text-white font-semibold text-sm">GitHub</span>
        </a>
      </div>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>☰</MenuButton>
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
          <Drawer.Content className="fixed top-0 left-0 w-full h-fit bg-black text-white z-50 p-4">
            <nav className="flex flex-col gap-4">
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/company" onClick={() => setIsOpen(false)}>
                Company
              </NavLink>
              <NavLink to="/arm-available" onClick={() => setIsOpen(false)}>
                Arm
              </NavLink>
              <NavLink to="/roadmap" onClick={() => setIsOpen(false)}>
                Roadmap
              </NavLink>
            </nav>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </HeaderContainer>
  );
}

export default ResponsiveHeader;
