import React, { useEffect } from 'react';
import { MsgWraper } from './elements';

interface IProp {
  state: boolean;
  text: string;
  type: string;
}

const ErrorMsg: React.FC<IProp> = props => {
  const { state, text, type } = props;
  return (
    <>
      {state && (
        <MsgWraper msgType={type}>
          <span>{text}</span>
        </MsgWraper>
      )}
    </>
  );
};

export default ErrorMsg;
