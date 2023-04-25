import * as React from 'react';
import Heading from '../heading/heading';

export interface ShowcaseProps {
  heading: string;
  kicker: string;
  children?: React.ReactNode;
}

export const Showcase: React.FC<ShowcaseProps> = ({
  heading,
  kicker,
  children
}: ShowcaseProps) => {
  return (
    <div className="showcase">
      <div className="showcase__kicker">{kicker}</div>
      <Heading as="h2" className="showcase__headline">{heading}</Heading>
      <p className="showcase__descr--large">
        <span>Create a single source of truth</span> for all aspects of your design system, bringing together the tools your teams already love.
      </p>
      <p className="showcase__descr">
        Build a community around your design system with documentation you can be proud of — share with your organization, your partners, or the world.
      </p>
      <p className="showcase__descr--last">
        Transform the way your team shares guidelines and best practices. Work together to iterate on content and gather feedback as you go.
      </p>
      <div className="showcase__img--large">
        <img src="img/showcase01.jpg" alt="Image of buildings in Bryggen in the city of Bergen in Norway" />
      </div>
      <div className="showcase__img">
        <img src="img/showcase02.jpg" alt="Image of buildings in Bryggen in the city of Bergen in Norway" />
      </div>
      <div className="showcase__img">
        <img src="img/showcase03.jpg" alt="Image of buildings in Bryggen in the city of Bergen in Norway" />
      </div>
    </div>
  );
};

export default Showcase;