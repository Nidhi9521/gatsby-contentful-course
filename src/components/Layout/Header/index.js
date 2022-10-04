import React from "react";
import Menu from "./Menu";
import { HeaderWrapper, HeaderInner } from "./style";
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Menu />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
