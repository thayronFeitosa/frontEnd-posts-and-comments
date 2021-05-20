import React, { useState, useEffect, useCallback } from 'react';
import Navigation from '../../../container/navigation';
import { Container } from './styles';
import axios from '../../../services/api';
import moment from 'moment-timezone';

interface FormData {
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

interface Iname {
  name: string;
}

const NotPermitted: React.FC = () => {
  const [comment, setComment] = useState<FormData>(); 
  const [post, setPost] = useState<FormData>();
  const [user, setUser] = useState<Iname>();

  useEffect(() => {
    loadUsers(); // eslint-disable-next-line
  }, []);

  const loadUsers = useCallback(async (a?: string) => {
    axios.get(`/api/posts/lastCommented`).then((res) => {
      setComment(res.data.comment[0]);
      setPost(res.data.post[0]);
      setUser(res.data.user[0]);
      console.log(res.data.user[0]);
      
    }).catch((err) => {
    })
// eslint-disable-next-line
  }, [post, comment]);
  return (
    <Container>
      <Navigation name1="/" title1="Novo post" name2="/all/posts" title2="Ver posts" name3="/last/post" title3="Último Comentario" />

      <div id="post" key={1}>
        <h1>{post?.title}</h1>
        <p>Criado em: {moment.tz((post?.created_at), 'America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')}</p>
        <p>Autor: {user?.name}</p>
        <div id="linha">
        </div>
        <p>{post?.description}</p>
      </div>

      <div id="post" key={2}>
        <span>Comentário realizado: {moment.tz((comment?.created_at), 'America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')}</span>
        <div id="linha">
        </div>
        <p>{comment?.description}</p>
      </div>

    </Container>
  )
};

export default NotPermitted;