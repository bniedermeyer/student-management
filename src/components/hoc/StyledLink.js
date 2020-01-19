import React from 'react';
import { Link } from '@reach/router';

const StyledLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          textDecoration: 'none'
        }
      };
    }}
  />
);

export default StyledLink;
