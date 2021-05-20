import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerNave } from './styles';

interface headerProps {
  name1: string;
  name2?: string;
  name3?: string;
  title1: string;
  title2?: string;
  title3?: string;
}

const Header: React.FC<headerProps> = ({
  name1,
  name2,
  name3,
  title1,
  title2,
  title3,
}) => {

  const handleLogout = () => {
    localStorage.removeItem('@controllertokenacessauth');
    window.location.reload(false);
  }
  return (
    <ContainerNave>
      <nav>
        <div>
          <ul>
            <li className={window.location.pathname === `${name1}` ? 'bold' : ''}><Link to={`${name1}`}>{title1}</Link></li>
            <li className={window.location.pathname === `${name2}` ? 'bold' : ''}><Link to={`${name2}`}>{title2}</Link></li>
            <li className={window.location.pathname === `${name3}` ? 'bold' : ''}><Link to={`${name3}`}>{title3}</Link></li>
            <button onClick={handleLogout} >Sair</button>
          </ul>
        </div>
      </nav>
    </ContainerNave>
  )
};

export default Header;