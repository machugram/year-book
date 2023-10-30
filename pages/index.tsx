import type { NextPage } from 'next';
import styled from 'styled-components';
import { PageLayout, MagicLink, PersonBlock, Footer } from '@/components/index';

import { sand } from '@radix-ui/colors';
import { persons, PersonType } from '@/lib/data';

interface HomeProps {}

const Home: NextPage<HomeProps> = ({ }) => {
  return (
    <>
      <PageLayout
        pageMetaProps={{
          title: 'COE `23',
          description: '',
        }}
      >
        <Wrappper>
          <section className="about">
            <h1 className="name">Computer Engineering Class of 2023</h1>
            <h2 className="name">COE'23</h2>

            <p>
              hi, bla bla bla
            </p>
          </section>
          <section className="experiments">
            <h3 className="section-header">Class Roll</h3>
            <div className="grid">
              {persons.map((person: PersonType, index: number) => (
                <PersonBlock {...person} key={index} />
              ))}
            </div>
          </section>
        </Wrappper>
      </PageLayout>

      {/* <Footer /> */}
    </>
  );
};

const Wrappper = styled.main`
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

  .experiments,
  .writing {
    padding-top: 50px;

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr ;
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

export default Home;
