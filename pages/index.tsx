import type { NextPage } from 'next';
import styled from 'styled-components';
import { PageLayout, MagicLink, PersonBlock,Wrapper } from '@/components/index';

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
        <Wrapper>
          <section className="about">
            <h1 className="name">Computer Engineering Class of 2023</h1>
            <h2 className="name">COE'23</h2>
            <p>
              4 years  of bonds, through the covid era to the UTAG strike era to the Kommey era and finally the last dance
              with the final year projects and defense. <br />
              Brewing good people to take on the world. 
            </p>
          </section>
          <section className="persons">
            <h3 className="section-header">Class Roll</h3>
            <div className="grid">
              {persons.map((person: PersonType, index: number) => (
                <PersonBlock {...person} key={index} />
              ))}
            </div>
          </section>
        </Wrapper>
      </PageLayout>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
