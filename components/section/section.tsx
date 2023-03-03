import * as React from 'react';

type Type = 'hero' | 'page';

export interface SectionProps {
  type?: Type;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  children,
  type = 'page'
}: SectionProps) => {
  return (
    <div className={`section section__${type}`}>
      {children}
    </div>
  );
};

export default Section;