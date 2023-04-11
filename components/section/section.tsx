import * as React from 'react';
import Heading from '../heading/heading';

type Type = 'hero' | 'single' | 'double' | 'triple';

export interface SectionProps {
  type?: Type;
  heading: string;
  byline: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  children,
  heading,
  byline,
  type = 'single'
}: SectionProps) => {
  return (
    <section className={`section section__${type}`}>
      <div className="container">
        {heading && <Heading className='section__heading' as='h2'>{heading}</Heading>}
        {byline && <p className='section__byline'>{byline}</p>}
        {children}
      </div>
    </section>
  );
};

export default Section;