/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  CharacterPanel,
  CharacterPanelWrap,
  AppBar,
  MainContainer
} from './elements';
import Switch from '../Switch/Switch';
import Spinner from '../Spinner/Spinner';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

interface IHero {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  skin_color: string;
}

interface IProp {
  actionGetPeople: () => {};
  peoplesList: IHero[];
  theme: string;
  isWaitResponse: boolean;
  mainMsg: { state: boolean; text: string; type: string };
  actionChangeTheme: () => {};
}

const Main: React.FC<IProp> = prop => {
  const {
    actionGetPeople,
    peoplesList,
    actionChangeTheme,
    theme,
    isWaitResponse,
    mainMsg
  } = prop;

  useEffect(() => {
    if (peoplesList.length === 0) {
      actionGetPeople();
    }
  }, []);

  const themeStyle: any = {
    light: {
      panel: 'mediumseagreen',
      color: '#000',
      mainBgc: '#eee',
      appBar: '#2196f3'
    },
    dark: {
      panel: 'green',
      color: '#fff',
      mainBgc: '#000',
      appBar: 'green'
    }
  };

  return (
    <>
      <ThemeProvider theme={themeStyle[theme]}>
        <MainContainer>
          <AppBar>
            <div>The Star Wars API</div>
            <Switch onChange={actionChangeTheme} />
          </AppBar>
          <ErrorMsg
            state={mainMsg.state}
            text={mainMsg.text}
            type={mainMsg.type}
          />
          {isWaitResponse && <Spinner />}

          <CharacterPanelWrap>
            {peoplesList.map((item, i) => {
              return (
                <CharacterPanel key={i}>
                  <h2>{item.name}</h2>
                  <p>
                    <span>Height:</span>
                    <span></span>
                    <span>{item.height}</span>{' '}
                  </p>
                  <p>
                    <span>Mass:</span>
                    <span></span>
                    <span>{item.mass}</span>{' '}
                  </p>
                  <p>
                    <span>Hair Color:</span>
                    <span></span>
                    <span>{item.hair_color}</span>{' '}
                  </p>
                  <p>
                    <span>Skin Color:</span>
                    <span></span>
                    <span>{item.skin_color}</span>{' '}
                  </p>
                  <p>
                    <span>Birth year:</span>
                    <span></span>
                    <span>{item.birth_year}</span>{' '}
                  </p>
                  <p>
                    <span>Gender:</span>
                    <span></span>
                    <span>{item.gender}</span>{' '}
                  </p>
                </CharacterPanel>
              );
            })}
          </CharacterPanelWrap>
        </MainContainer>
      </ThemeProvider>
    </>
  );
};

export default Main;
