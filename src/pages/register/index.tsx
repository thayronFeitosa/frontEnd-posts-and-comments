import React, { useRef } from 'react';
import axios from 'axios'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FaUserCog, FaRegUser, FaUserTag } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import {
  RiDashboardLine,
  RiWhatsappFill,
  RiFileUserLine,
  RiMailLine,
  RiLockPasswordLine,
  RiCommunityFill,

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
        name: Yup.string()
          .required('Nome é obrigatório'),
        cpf: Yup.string()
          .required('CPF é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      axios.post('http://127.0.0.1:8000/api/users', data).then((response) => {
        console.log(response.data);
        addToast({
          type: 'success',
          title: 'Usuário cadastrado!',
          description: 'Usuário cadastrado com sucesso!',
        });
      }).catch((error) => {
        console.log(error.response.data.errors);
        addToast({
          type: 'success',
          title: 'Usuário cadastrado!',
          description: 'Usuário cadastrado com sucesso!',
        });
      });



      // history.push('/posts');
      // const userStorage = JSON.parse(localStorage.getItem('@controller:user') || '{}');
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
        <div id="row">
          <div>
            <h1>Preencha o formulario para se cadastrar no sistema</h1>
            <div id="form">
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="name" icon={FaRegUser} placeholder="Nome Completo" />
                <Input type="email" name="email" icon={RiMailLine} placeholder="E-mail" />
                <Input name="cpf" icon={RiFileUserLine} placeholder="CPF" />
                <Input type="password" name="password" icon={RiLockPasswordLine} placeholder="Senha" />
                <Input type="password_confirmation" name="password_confirmation" icon={RiLockPasswordLine} placeholder="Confirmar senha" />
                <div id="buttonSubmit">
                  <Button type="submit" color="#2AA9E0" shadow="#2AA9E0">Confirmar</Button>
                </div>
              </Form>
            </div>
          </div>
          <div id="cadastrar">
            <Link className="color-green retirarLink" to={`/login`}>Login</Link>
          </div>
        </div>
      </Container>
      <GlobalStyles />
    </>
  );
};

export default Login;