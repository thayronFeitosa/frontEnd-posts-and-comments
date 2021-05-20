import React from 'react';
import { BsCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

import { PaginationStyle } from './styles';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

interface Iprops {
  limit: any;  // eslint-disable-line
  total: any;  // eslint-disable-line
  offset: any;  // eslint-disable-line
  setOffset: any;  // eslint-disable-line
  imgSize?: number
}
const Pagination: React.FC<Iprops> = ({
  limit,
  total,
  offset,
  setOffset,
  imgSize,
}) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);  // eslint-disable-line

  function onPageChange(page: any) {  // eslint-disable-line
    setOffset((page - 1) * limit);
  }

  return (
    <PaginationStyle imgSize={imgSize}>
      <ul className="pagination">
        <li>
          <button
            className="proxima"
            type="button"
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
          >
            <BsCaretLeftFill />
          </button>
        </li>
        <li>
          <button
            className="proxima"
            type="button"
            onClick={() => onPageChange(current + 1)}
            disabled={current === pages}
          >
            <BsFillCaretRightFill />
          </button>
        </li>
      </ul>
    </PaginationStyle>
  );
};

export default Pagination;