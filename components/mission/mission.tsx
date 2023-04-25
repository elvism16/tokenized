import * as React from 'react';
import Heading from '../heading/heading';
import Button from "../button/button";

type Type = 'primary' | 'secondary';

export interface MissionProps {
  btnType?: Type;
  heading: string;
  paragraph?: string;
  btnLabelPrimary?: string
  btnTarget?: string;
  imgSrc: string;
  imgAlt: string;
}

export const Mission: React.FC<MissionProps> = ({
  heading,
  paragraph,
  btnLabelPrimary,
  btnTarget,
  btnType = 'primary',
  imgSrc,
  imgAlt
}: MissionProps) => {
  return (
    <div className="mission">
      <div className="mission__intro">
        <Heading as="h3" className="mission__headline">{heading}</Heading>
        {paragraph && <p className="mission__text">{paragraph}</p>} 
      </div>
      {btnLabelPrimary && <Button
        type={btnType}
        target={btnTarget}
        onClick={() => console.log("You clicked the button!")}
      >{btnLabelPrimary}</Button>}
      <div className="mission__media">
        <img className="mission__image" src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};

export default Mission;