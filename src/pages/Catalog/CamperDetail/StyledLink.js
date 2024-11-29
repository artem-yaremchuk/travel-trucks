import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -27px;
    width: 100%;
    height: 5px;
    background-color: var(--button-color);
  }
`;

export default StyledLink;
