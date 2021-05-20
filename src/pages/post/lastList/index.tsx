import React, { useState, useEffect, useCallback } from 'react';
import * as Yup from 'yup';
import Navigation from '../../../container/navigation';
import { useToast } from '../../../hooks/toast';
import { Container } from './styles';
import axios from '../../../services/api';
import PostData from '../../../container/post'
import Pagination from '../../../container/pagination';
import moment from 'moment-timezone';

interface FormData {
  title: string;
  description: string;
  created_at: string;
  updated_at: string;

}

const NotPermitted: React.FC = () => {
  const { addToast } = useToast();
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<FormData>();

  useEffect(() => {
    loadUsers(); // eslint-disable-next-line
  }, [offset]);

  const loadUsers = useCallback(async (a?: string) => {
    axios.get(`/api/posts/lastCommented`).then((res) => {
      setData(res.data[0]);      
    }).catch((err) => {
    })

  }, [offset]);
  return (
    <Container>
      <Navigation name1="/" title1="Novo post" name2="/all/posts" title2="Ver posts" name3="/last/post" title3="Último Comentario" />
      <h1>Último Comentario</h1>
       <span>{data !== undefined ? `Criado em: ${moment.tz((data?.created_at), 'America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')}`: null}</span>
       <span>{data !== undefined ? `Ultima atualização: ${moment.tz((data?.created_at), 'America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')}`: null}</span>
      <p>{data?.description}</p>
    </Container>
  )
};

export default NotPermitted;