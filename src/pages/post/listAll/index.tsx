import React, { useState, useEffect, useCallback } from 'react';
import * as Yup from 'yup';
import Navigation from '../../../container/navigation';
import { useToast } from '../../../hooks/toast';
import { Container } from './styles';
import axios from '../../../services/api';
import PostData from '../../../container/post'
import Pagination from '../../../container/pagination';

interface FormData {
  title: string;
  description: string;
}

const NotPermitted: React.FC = () => {
  const { addToast } = useToast();
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [sizeArray, setSizeArray] = useState([]);

  useEffect(() => {
    loadUsers(); // eslint-disable-next-line
    console.log(offset);
    axios.get(`/api/posts?page=${offset -3}`).then((res) => {
      setData(res.data.data);
      setSizeArray(res.data.total);
    }).catch((err) => {
      console.log(err);
    })

  }, [offset]);

  const loadUsers = useCallback(async (a?: string) => {
    axios.get(`/api/posts?page=${offset}`).then((res) => {
      setData(res.data.data);
      setSizeArray(res.data.total);
    }).catch((err) => {
      console.log(err);
    })

  }, []);
  return (
    <Container>
      <Navigation name1="/" title1="Novo post" name2="/all/posts" title2="Ver posts" name3="/last/post" title3="Último post" />
      <PostData values={data} />
      <Pagination
        limit={5}
        total={sizeArray}
        offset={offset}
        setOffset={setOffset}
      />
    </Container>
  )
};

export default NotPermitted;