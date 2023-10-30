import styled from 'styled-components';
import { sandDark } from '@radix-ui/colors';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <a href="https://github.com/machugram" target="_blank" rel="noreferrer">
          made by rexford 
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${sandDark.sand1};
  padding: 0px 0;
  border-top: 1px solid ${sandDark.sand5};

  @media (max-width: 720px) {
    padding-top: 0px;
  }

  a {
    font-size: 18px;
    padding: 0 0px;
    font-family: 'Playfair Display', serif;
    display: inline-block;

    &:last-child {
      padding-right: 0;
    }
  }
`;
