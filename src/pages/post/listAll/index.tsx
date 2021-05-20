import React, { useState, useEffect, useCallback } from 'react';
import * as Yup from 'yup';
import Navigation from '../../../container/navigation';
import { useToast } from '../../../hooks/toast';
import { Container } from './styles';
import axios from '../../../services/api';
import PostData from '../../../container/post'

interface FormData {
  title: string;
  description: string;
}

const NotPermitted: React.FC = () => {
  const { addToast } = useToast();
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadUsers(); // eslint-disable-next-line
    console.log(offset);

  }, [offset]);

  const loadUsers = useCallback(async (a?: string) => {
    axios.get('/api/posts').then((res) => {
      console.log(res.data.data);
      setData(res.data.data)
    })
    

  }, []);
  return (
    <Container>
      <Navigation name1="/" title1="Novo post" name2="/all/posts" title2="Ver posts" name3="/last/post" title3="Último post" />
      <PostData values={data} />
    </Container>
  )
};

export default NotPermitted;