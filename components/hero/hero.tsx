import * as React from 'react';
import Button from "../button/button";


export interface HeroProps {
  imgSrc?: string;
  imgAlt?: string;
}

export const Hero: React.FC<HeroProps> = ({
  imgSrc,
  imgAlt
}: HeroProps) => {
  return (
    <div className="hero container">
      <div className="hero__grid">
        <div className="hero__content">
          <h1 className="hero__headline">
            Are you ready to get <span>Design Tokenized?</span>
          </h1>
          <div className="button-group">
            <Button
              type='primary'
              target='http://bitgrip.com'
              onClick={() => console.log("You clicked the button!")}
            >Get it</Button>
            <Button
              target='http://bitgrip.com'
              onClick={() => console.log("You clicked the button!")}
            >Try again</Button>

          </div>
        </div>
        <img className="hero__image" src="/hero03.png" alt="Image of buildings in Bryggen in the city of Bergen in Norway" />
      </div>
    </div>
  );
};

export default Hero;