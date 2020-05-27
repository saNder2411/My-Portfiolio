import styled from 'styled-components';

const StyledSelectLang = styled.select`
  position: absolute;
  left: 1%;
  font: 12px 'opensans-bold', sans-serif;
  background: transparent;
  display: block;
  text-decoration: none;
  letter-spacing: 0;
  color: #fff;
  padding: 8px 13px;
  line-height: 32px;
  margin: 0;
  cursor: pointer;
  height: auto;
  outline: none;
  min-width: auto;
  appearance: none;
  
  & option {
    color:  #333;
  }
`;


export default StyledSelectLang;
