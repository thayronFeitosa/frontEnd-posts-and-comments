import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import notPermission from '../../img/Erro-404.svg';

const NotPermitted: React.FC = () => (
  <Container>
    <div id="row">
      <div id="divImg">
        <img src={notPermission} alt="" id="img" />
      </div>
      <div id="texto">
        <h1>
          Pagina não encontrada
        </h1>
        <p>
          desculpe, a página solicitada não foi encontrada,
          por favor volte para a página inicial
        </p>
      </div>

      <div id="button">
        <Link to="/new/posts">
          Voltar
        </Link>
      </div>
    </div>
  </Container>
);

export default NotPermitted;