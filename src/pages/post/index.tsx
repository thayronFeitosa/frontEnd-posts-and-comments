import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core'
import * as Yup from 'yup';
import Input from '../../container/input';

interface FormData {
  title: string;
  description: string;
}

const NotPermitted: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = () => {
    const title = document.getElementById('input') as HTMLInputElement;
    const description = document.getElementById('textarea') as HTMLInputElement;

    const data = {
      description: description.value,
      title: title.value
    }

    console.log(data);


  }
  return (
    <Container>
      <div id="row">
        <h1>Criando novo Post</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <input id="input" name="title" type="text" />
          </div>
          <div>
            <textarea id="textarea" name="description" />
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