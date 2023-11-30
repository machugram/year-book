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
            <h2 className="name">Statistics</h2>
            <p>
             The class has 160 members<br />
             We have 144 Males and  16 Females


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
