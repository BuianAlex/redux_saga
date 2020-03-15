import styled, { StyledFunction } from 'styled-components';

interface MsgProps {
  readonly msgType: string;
}

// const wrap: StyledFunction<YourProps> = styled.div;

const msgColors = {
  error: 'red'
};

export const MsgWraper = styled.div<MsgProps>`
  padding: 1rem;
  color: ${props => (props.msgType ? msgColors.error : msgColors.error)};
  text-align: center;
`;
