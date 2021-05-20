import React, { useState, useEffect, useCallback } from 'react';
import * as Yup from 'yup';
import { Container } from './styles';
import moment from 'moment-timezone';

interface propsTable {
  values: object | [];
  length?: number;
  paragraph?: string;
}

interface valueArray {
  title: string | number;
  description: string | number;
  created_at: string | number;
  updated_at: string | number;
  id: string | number;


}

interface propsBody {
  values?: [] | object | any;
  length?: number;
}
const TableBody: React.FC<propsBody> = (props) => {
  const { values, length } = props;

  const lines = values.filter((line: valueArray) => line.title).map((line: valueArray) => (
    <div id="post" key={line.id}>
      <h1>{line.title}</h1>
      <span>data do post: {moment.tz((line.created_at), 'America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')}</span>
      <div id="linha">
      </div>
      <p>{line.description}</p>
    </div>
  ));
  return (
    <>
      { lines}
    </>
  );
};

const Post: React.FC<propsTable> = (props) => {
  const {
    values,

  } = props;
  return (
    <Container>
      <TableBody values={values} />
    </Container>
  )
};

export default Post;