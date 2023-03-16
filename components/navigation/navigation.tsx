import * as React from 'react';
import { useState } from 'react';


export interface MainNavProps {
  children?: React.ReactNode;
}

export const MainNav: React.FC<MainNavProps> = ({
  children,
}: MainNavProps) => {
  const [isActive, setActive] = useState(false);

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="nav__wrapper">
      <button className="menu-button" onClick={ToggleClass}>Open the menu</button>
      <nav className={`main-nav main-nav--${isActive ? "active" : "hidden"}`}>
        <ul className="main-nav__list">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">About</a></li>
          <li className="nav-item"><a href="#" >Work</a></li>
          <li className="nav-item"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;