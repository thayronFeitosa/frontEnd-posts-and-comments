import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import {
  RiMailLine,
  RiLockPasswordLine,
} from 'react-icons/ri';

import { Container } from './styles';
import GlobalStyles from '../../styles/loginGlobal';
import Input from '../../container/input';
import Button from '../../container/button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();

  async function handleSubmit(data: SignInFormData) {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail é obrigatório'),
        password: Yup.string()
          .required('Senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/posts');
      const userStorage = JSON.parse(localStorage.getItem('@controller:user') || '{}');
      addToast({
        type: 'success',
        title: 'Login realizado com sucesso!',
        description: 'Seja bem vindo!',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
      });
    }
  }

  return (
    <>
      <Container>
        <div>
          <div id="row">
            <div>
              <h1>Olá Seja Bem vindo!</h1>
              <div id="form">
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <div className="input">
                    <Input type="email" name="email" icon={RiMailLine} placeholder="E-mail" />
                  </div>
                  <div className="input">
                    <Input type="password" name="password" icon={RiLockPasswordLine} placeholder="Senha" />
                  </div>
                  <div id="buttonSubmit">
                    <Button type="submit" color="#2AA9E0" shadow="#2AA9E0">Login</Button>
                  </div>
                </Form>
              </div>
            </div>
            <div id="cadastrar">
              <Link className="color-green retirarLink" to={`/users/register/`}>Registar</Link>
            </div>
          </div>
        </div>
      </Container>
      <GlobalStyles />
    </>
  );
};

export default Login;