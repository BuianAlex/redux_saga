import styled from 'styled-components';

export const AppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: ${props => props.theme.appBar};
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
      border-bottom: 1px dotted ${props => props.theme.color};
      height: 1em;
      margin: 0 0.4em;
    }
  }
`;

export const CharacterPanelWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  margin: 0;
`;

export const MainContainer = styled.div`
  box-sizing: border-box;
  background-color: ${props => props.theme.mainBgc};
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
`;
