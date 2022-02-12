import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Greetings, This is Devin Veney. I am a Next.JS Front-End Developer.{' '}
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/files/resume.pdf';
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
