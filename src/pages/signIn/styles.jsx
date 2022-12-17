import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  line-height: 43.58px;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  line-height: 24.51px;
  margin: 16px 0;
`;
