import React from 'react';
import { ScaleLoader } from 'react-spinners';
// import './Spinner.scss';
import style from 'styled-components';
const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SpinnerWrap = style.div`
width: 100%;
text-align: center;
margin-bottom: 1rem;
margin-top: 1rem;

`;

const Spiner: React.FC = () => {
  return (
    <SpinnerWrap>
      <ScaleLoader css={override} color={'#065a69'} />
    </SpinnerWrap>
  );
};

export default Spiner;
