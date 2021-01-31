import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../Link';

const StyledLink = styled(Link)`
  margin-left: -32px;
  padding: 0 20px;
  transition: .3s;
  &:hover {
    opacity: .5;
  }
`;

const SVG = styled.svg`
  vertical-align: middle;
`;

export default function HomeLink({ href }) {
  return (
    <StyledLink href={href}>
      <SVG xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </SVG>
    </StyledLink>
  );
}

HomeLink.propTypes = {
  href: PropTypes.string.isRequired,
};
