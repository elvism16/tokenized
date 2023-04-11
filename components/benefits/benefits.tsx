import * as React from 'react';
import Heading from '../heading/heading';

export interface BenefitsProps {
  heading: string;
  paragraph?: string;
  iconPath?: string;
  children?: React.ReactNode;
}

export const Benefits: React.FC<BenefitsProps> = ({
  heading,
  paragraph,
  children
}: BenefitsProps) => {
  return (
    <div className="benfits">
      <div className="benefits__icon">
        {children}
      </div>
      <Heading as="h3" className="benfits__headline">{heading}</Heading>
      {paragraph && <p className="benfits__text">{paragraph}</p>}
    </div>
  );
};

export default Benefits;