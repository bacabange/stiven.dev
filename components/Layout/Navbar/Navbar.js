import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
`;

const Menu = styled.menu`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media all and (min-width: 600px) {
    justify-content: center;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 100px;
  }
  @media all and (min-width: 600px) {
    flex: 1;
  }
  @media all and (min-width: 900px) {
    order: 0;
  }
`

const Item = styled.div`
  white-space: nowrap;
  width: 100%;
  text-align: center;
  order: 2;
  display: none;
  padding: 1rem 2rem;
  > a {
    color: ${(props) => props.active ? props.theme.colors.primary : 'white'};
    text-decoration: none
  }
  @media all and (min-width: 900px) {
    order: 1;
    display: block;
    width: auto;
  }
`;

const Toggle = styled.div`
  order: 1;
  @media all and (min-width: 600px) {
    flex: 1;
    order: 2;
    text-align: right;
  }
  @media all and (min-width: 900px) {
    display: none;
  }
`;


function Navbar() {
  return (
    <>
      <Nav>
        <Menu>
          <Brand>
            <Link href="/">
              <img src="/images/Logo.png" alt="my image" />
            </Link>
          </Brand>
          <Item active>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Item>
          <Item>
            <Link href="/about">
              <a>Skills</a>
            </Link>
          </Item>
          <Item>
            <Link href="/">
              <a>Posts</a>
            </Link>
          </Item>
          <Toggle><a href="#"><i className="fas fa-bars"></i></a></Toggle>
        </Menu>
      </Nav>
      {/* <Nav>
        <Brand>
          <img src="/images/Logo.png" alt="my image" />
        </Brand>

        <NavbarNav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </NavbarNav>
      </Nav> */}
    </>
  )
}

export default Navbar
