import React from 'react';
import { Container } from './styles';
import moment from 'moment-timezone';
import { Link } from 'react-router-dom';

interface propsTable {
  values: object | [];
  length?: number;
  paragraph?: string;
}

interface valueArray {
  title?: string | number;
  description?: string | number;
  created_at?: string | number;
  updated_at?: string | number;
  id: string | number;


}

interface propsBody {
  values?: [] | object | any;
  length?: number;
}
const TableBody: React.FC<propsBody> = (props) => {
  const { values } = props;

  const lines = values.filter((line: valueArray) => line.title).map((line: valueArray) => (
    <div id="post" key={line.id}>
      <h1>{line.title}</h1>
      <span>Criado em: {moment.tz((line.created_at), 'America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')}</span>
      <div id="linha">
      </div>
      <textarea disabled>{line.description}</textarea>
      <div id="button">
        <button>
          <Link className="color-green retirarLink" to={`/comment/${line.id}`}>Comentar</Link>
        </button>
      </div>
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