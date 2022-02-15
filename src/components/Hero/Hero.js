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
          Greetings,
        </SectionTitle>
        <SectionText>
          I am a Full Stack Web Developer who specializes in building clean and
          aesthetically pleasing web applications.{' '}
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.open('/files/', '_blank');
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
