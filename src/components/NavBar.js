import React from "react";

import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper } from "./NavBarElements";

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                   <p>Eagle Drops</p>
                   
                </LogoContainer>
                <Menu>
                    <MenuItem>
                        <MenuItemLink>
                           Inicio
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                           Nosotros
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                           Tienda
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                           Contacto
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
            </Wrapper>
        </Container>
    );
};

export default NavBar;







