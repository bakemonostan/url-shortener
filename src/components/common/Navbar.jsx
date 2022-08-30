import styled from 'styled-components';
import { logo } from 'images';
import { useState } from 'react';

const Wrapper = styled.nav`
  padding: 2rem 2rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 2rem;
  max-width: 300px;
  margin: 0 auto;

  .logo img {
    width: 100px;
  }

  .menu {
    margin-bottom: 5px;
    cursor: pointer;
  }

  .menu > div {
    background-color: gray;
    width: 30px;
    height: 3px;
    margin: 0 0 0.3rem 0;
  }

  @media (min-width: 965px) {
    padding: 2rem 6rem;
    max-width: 1440px;

    .menu {
      display: none;
    }
  }
`;

const NavList = styled.ul`
  position: absolute;
  list-style: none;
  display: ${(p) => (p.show ? 'block' : 'none')};
  background-color: aliceblue;
  width: 90%;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 70px;
  text-align: center;
  padding: 2rem 0;
  border-radius: 10px;
  margin-top: 1rem;
  z-index: 100;

  li {
    padding: 0.5rem;
  }

  .list_one,
  list_two {
    padding: 1rem;
  }
`;

const NavListDesktop = styled.ul`
  display: none;

  @media (min-width: 965px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    list-style: none;

    div {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      gap: 1rem;
      cursor: pointer;
    }
  }
`;

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Wrapper>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <NavListDesktop>
        <div>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </div>
        <div>
          <li>Login</li>
          <li>Sign up</li>
        </div>
      </NavListDesktop>
      <div className='menu' onClick={() => setMenu(!menu)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <NavList show={menu}>
        <div className='list_one'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </div>
        <div className='list_two'>
          <li>Login</li>
          <li>Sign up</li>
        </div>
      </NavList>
    </Wrapper>
  );
};
export default Navbar;
