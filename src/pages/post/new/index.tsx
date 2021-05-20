import React, { useRef } from 'react';
import { Container } from './styles';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core'
import Navigation from '../../../container/navigation';
import { useToast } from '../../../hooks/toast';

import axios from '../../../services/api';

interface FormData {
  title: string;
  description: string;
}

const NotPermitted: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast();

  const handleSubmit: SubmitHandler<FormData> = () => {
    const title = document.getElementById('input') as HTMLInputElement;
    const description = document.getElementById('textarea') as HTMLInputElement;

    const data = {
      description: description.value,
      title: title.value
    }

    if(data.title === '' || data.description === '') {
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Campos titulo e descrição são obrigatórios',
      });
      return
    }

    axios.post('/api/posts', data).then((response) => {
      addToast({
        type: 'success',
        title: 'Cadastro realizado',
        description: 'Cadastro realizado com sucesso',
      });

    }).catch((err) => {
      console.log(err);
      
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Erro ao tentar cadastrar o post',
      });
    })

  }
  return (
    <Container>
      <div id="row">
      <Navigation name1="/" title1="Novo post" name2="/all/posts" title2="Ver posts" name3="/last/post" title3="Último Comentario" />
        <h1>Criando novo Post</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <input id="input" name="title" type="text" placeholder="Titulo" />
          </div>
          <div>
            <textarea id="textarea" name="description" placeholder="Descição" />
          </div>
          <div id="button">
            <button type="submit">Publicar</button>
          </div>
        </Form>
      </div>
    </Container>
  )
};

export default NotPermitted;