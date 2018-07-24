import React from "react";
import styled from "react-emotion";

const StyledLayout = styled("main")`
  margin: 1rem auto;
  max-width: 800px;
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    color: var(--gray);
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5rem;
  }

  em {
    font-style: italic;
  }
`;

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
