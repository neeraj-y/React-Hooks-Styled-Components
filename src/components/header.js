import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

const NavLeft = styled.div`
    width: 33.333%;
    text-align: left;
`;

const NavCenter = styled.div`
    width: 33.333%;
    text-align: center;
`;

const Input = styled.input`
    font-size: 16px;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    padding: 7px 33px;
    border-radius: 3px;
    color: #999;
    cursor: text;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    background: #fafafa;

    &:active,
    &:focus {
        text-align: left;
    }

    &:active,
    &:focus {
        text-align: left;
    }
`;

const NavRight = styled.div`
    width: 33.333%;
    text-align: center;
    display: flex;
    justify-content: flex-end;
`;

const MenuLink = styled.a`    
    margin-right: 5px;
    border-radius: 18px;
    background-color: cornflowerblue;
    color: #fee;
    border: 1px solid #fee;
    width: 35px;
    height: 35px;
    padding: 3px;

    &:hover {
        text-decoration: none;
        color: #fee;
    }
`;

function Header() {
    return (
        <Nav>
            <NavHeader>
                <NavLeft>Image Troupe</NavLeft>

                <NavCenter>
                    <Input type='text' placeholder='Search' />
                </NavCenter>

                <NavRight>
                    <MenuLink href='#'>C</MenuLink>
                    <MenuLink href='#'>E</MenuLink>
                    <MenuLink href='#'>A</MenuLink>
                </NavRight>
            </NavHeader>
        </Nav>
    )
}

export default Header;