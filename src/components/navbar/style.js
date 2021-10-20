import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 121px;
  width: 1210px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 0 10px 0;
  align-items: center;
  background-color: #ffff;

  > a {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    border-radius: 3px;
    color: #ffffff;
    background-color: #cd0826;
    font-family: "Work Sans",Sans-serif;
    text-decoration: none;
    margin-right: auto;
    transition: all .3s;
    :hover {
      color: #ffffff;
      background-color: #333;
    }
  }
`;

export const ImageDiv = styled.div`

  > img {
    height: auto;
    width: 212.983px;
  }
`;

export const LinksDiv = styled.div`
  display: flex;
  height: 46px;
  width: 713.9px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
    
  > a {
    text-decoration: none;
    color: #666666;
    padding: 13px 26px;
    font-family: "Work Sans", Sans-serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: .4px;
    
    :hover {
      color: #d73b53;
      border-bottom: 3px solid #cd0826;
    }
  }
`;
