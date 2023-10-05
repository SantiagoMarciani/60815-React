import React from "react";
import CartWidget from "./CartWidget";
import { Flex, Box, Heading, Spacer, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const Navbar  = () => {
  return (
    <div>
      <Flex minWidth='max-content' alignItems='center' gap='12'>
        <Box p='2'>
          <Heading size='md'>MiCarrito 60815</Heading>
        </Box>
        <Spacer />

        <Box>
          <Menu>
            <MenuButton>Categorias</MenuButton>
            <MenuList>
            <MenuItem>Categoria 1</MenuItem>
            <MenuItem>Categoria 2</MenuItem>
            <MenuItem>Categoria 3</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Spacer />

        <Box>
          <CartWidget/>
        </Box>
      </Flex>

    </div>
  )
}

export default Navbar
