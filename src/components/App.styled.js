import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;
export const Title = styled.h1`
  margin-left: 20px;
  margin-top: 20px;
  font-size: 20px;
  color: #5b5b5b;
`;
export const GenresList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
export const MovieDetailsWrap = styled.div`
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const Poster = styled.img`
  width: 300px;
`;
export const MainWrap = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #5b5b5b;
`;
export const AdditionalWrap = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid #5b5b5b;
`;
export const BackBtn = styled.button`
  border: none;
  padding: 4px 8px;
  background-color: tomato;
  color: white;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const MoviePageWrap = styled.div`
  margin-left: 20px;
  margin-top: 30px;
`;
export const MoreLink = styled(Link)`
  color: #5b5b5b;
  font-weight: bold;
  text-decoration: none;
`;
export const MovieTitle = styled.h2`
  margin-bottom: 30px;
`;
export const MovieInfo = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;
`;
