import React from "react";
import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1rem;
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin-right: 2rem;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  padding: 12px;
  margin: 8px;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const Tags = ({ setTag }) => {
    return <TagsContainer>
        <TagTitulo>Busque por tags:</TagTitulo>
        <Div>
        {tags.map(tag => <Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</Tag>)}
        </Div>
    </TagsContainer>
  
};

export default Tags;
