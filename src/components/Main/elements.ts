import styled from 'styled-components';

export const AppBar = styled.div`
  background-color: #2196f3;
  color: #fff;
  min-height: 4rem;
`;

export const CharacterPanel = styled.li`
  width: 20%;
  padding: 15px;
  margin-bottom: 1.25rem;
  border-radius: 0;
  background-color: ${props => props.theme.panel};
  color: ${props => props.theme.color};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  list-style: none;
  p {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    span:nth-child(2) {
      flex: 1 0;
      border-bottom: 1px dotted #000;
      height: 1em;
      margin: 0 0.4em;
    }
  }
`;
export const CharacterPanelWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #eee;
  padding: 2rem;
  margin: 0;
`;
