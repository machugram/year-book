import styled from 'styled-components';
import { sand } from '@radix-ui/colors';

export const Wrapper = styled.main`
  .about {
    padding-top: 60px;
    .name {
      font-size: 25px;
      font-weight: 600;
      color: ${sand.sand5};
    }

    p {
      color: ${sand.sand9};
      font-size: 18px;
      line-height: 1.5;
      font-weight: 500;
    }

    em {
      text-decoration: none;
      font-style: normal;
      color: ${sand.sand4};
      font-size: 18px;
    }
  }

  .persons,
  .writing {
    padding-top: 50px;

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
      gap: 10px;
    }
  }

  .section-header {
    color: ${sand.sand9};
    font-size: 18px;
    cursor: pointer;
    font-weight: 600;

    @media (max-width: 720px) {
      color: ${sand.sand7};
      font-size: 20px;
    }
  }
`;