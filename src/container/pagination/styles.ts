import styled, { css } from 'styled-components';

interface ContainerProps {
  imgSize?: number | 35;
}

export const PaginationStyle = styled.div<ContainerProps>`
  z-index: 5000;
.pagination {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  button {
    color: #A3A6B4;
    outline: 0;
  }
  .pagination li + li {
    border-radius: 5px;
    border: 0;
    margin-left: 5px;
  }
  .pagination__item--active {
    font-weight: bold;
    border: none;
    border-radius: 5px;
    border: 1px solid #A3A6B4;
    margin-left: 5px;
    width: 20px;
    background: rgb(0, 0, 0) transparent;
  }
  .pagination__item--desactive {
    width: 20px;
    background: rgb(0, 0, 0) transparent;
    border-radius: 5px;
    border: 0;
    margin-left: 5px;
  }
  .pagination__item--active:focus {
    border: none;
    border-radius: 5px;
    border: 1px solid #A3A6B4;
    margin-left: 5px;
    width: 20px;
    background: rgb(0, 0, 0) transparent;
  }
  .anterior, .proxima {
    margin-left: 5px;
    background: rgb(0, 0, 0) transparent;
    border-radius: 5px;
    border: 0;
    svg {
      ${(props) => props.imgSize && css`font-size:: ${props.imgSize}`};
      margin-top: 7px;
    }
  }
}
`;