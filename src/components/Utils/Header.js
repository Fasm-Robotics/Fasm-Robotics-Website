import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Drawer } from 'vaul';
import GitHubButton from '../Animations/GitHubButton';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
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

const GitHubButtonWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
  }
`;

function ResponsiveHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>FASM Robotics</Logo>
      <ContentWrapper>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/company">Team</NavLink>
          <NavLink to="/arm-available">Arm</NavLink>
          <NavLink to="/roadmap">Roadmap</NavLink>
          <NavLink to="/virtual-controller">VC3D</NavLink>
          <NavLink to="/docs/index.html" target="_blank" rel="noopener noreferrer">
            Documentation
          </NavLink>
        </Nav>
      </ContentWrapper>
      <GitHubButtonWrapper>
        <GitHubButton />
      </GitHubButtonWrapper>
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
                Team
              </NavLink>
              <NavLink to="/arm-available" onClick={() => setIsOpen(false)}>
                Arm
              </NavLink>
              <NavLink to="/roadmap" onClick={() => setIsOpen(false)}>
                Roadmap
              </NavLink>
              <NavLink to="/virtual-controller" onClick={() => setIsOpen(false)}>
                VC3D
              </NavLink>
              <NavLink to="/docs/index.html" target="_blank" rel="noopener noreferrer">
                Documentation
              </NavLink>
            </nav>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </HeaderContainer>
  );
}

export default ResponsiveHeader;
