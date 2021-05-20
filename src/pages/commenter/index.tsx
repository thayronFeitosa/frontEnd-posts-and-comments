import React, { useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container } from './styles';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core'

import Navigation from '../../container/navigation';
import { useToast } from '../../hooks/toast';

import axios from '../../services/api';

interface FormData {
  title: string;
  description: string;
}

const NotPermitted: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const handleSubmit: SubmitHandler<FormData> = () => {
    const description = document.getElementById('textarea') as HTMLInputElement;


    const data = {
      description: description.value,
      post_id: id
    }

    if(data.description === '') {
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Não é possível comentar vazio',
      });
      return
    }

    axios.post('/api/comments', data).then((response) => {
      addToast({
        type: 'success',
        title: 'Comentário realizado',
        description: 'Comentário realizado com sucesso',
      });
      history.push('/last/post');


    }).catch((err) => {
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Erro ao ralizar o cadastro do usuário',
      });
    })

  }
  return (
    <Container>
      <Navigation name1="/" title1="Novo post" name2="/all/posts" title2="Ver posts" name3="/last/post" title3="Último Comentario" />
      <div id="row">
        <h1>Comentar</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <textarea id="textarea" name="description" placeholder="Descição" />
          </div>
          <div id="button">
            <button type="submit">Comentar</button>
          </div>
        </Form>
      </div>
    </Container>
  )
};

export default NotPermitted;