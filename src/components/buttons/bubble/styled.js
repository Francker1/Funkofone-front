import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 0.75rem 2.75rem;
  color: var(--accent-color);
  overflow: hidden;
  z-index: 1;
  position: relative;
  transition: 0.5s;
  font-size: 1.2rem;

  & {
    :hover {
      cursor: pointer;
      color: var(--white-color);
      text-decoration: none;
    }

    span {
      position: absolute;
      width: 25%;
      height: 100%;
      background-color: var(--accent-color);
      transform: translateY(150%);
      border-radius: 50%;
      left: calc((var(--n) - 1) * 25%);
      transition: 0.5s;
      transition-delay: calc((var(--n) - 1) * 0.1s);
      z-index: -1;
    }

    span:nth-child(1) {
      --n: 1;
    }

    span:nth-child(2) {
      --n: 2;
    }

    span:nth-child(3) {
      --n: 3;
    }

    span:nth-child(4) {
      --n: 4;
    }
  }

  &:hover span {
    transform: translateY(0) scale(2);
  }
`;

export default StyledLink;
