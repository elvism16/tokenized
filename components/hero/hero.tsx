import * as React from 'react';


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
            <a className="btn" href="#">Button 1</a>
            <a className="btn" href="#">Button 2</a>
          </div>
        </div>
        <img className="hero__image" src="/hero02.png" alt="Image of buildings in Bryggen in the city of Bergen in Norway" />
      </div>
    </div>
  );
};

export default Hero;