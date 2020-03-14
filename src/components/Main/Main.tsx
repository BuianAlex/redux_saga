/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { CharacterPanel, CharacterPanelWrap, AppBar } from './elements';
import Switch from '../Switch/Switch';
import Spinner from '../Spinner/Spinner';

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
  actionChangeTheme: () => {};
}

const Main: React.FC<IProp> = prop => {
  const {
    actionGetPeople,
    peoplesList,
    actionChangeTheme,
    theme,
    isWaitResponse
  } = prop;
  console.log(theme);

  useEffect(() => {
    if (peoplesList.length === 0) {
      actionGetPeople();
    }
  }, []);
  const themeStyle: any = {
    light: { panel: 'mediumseagreen', color: '#000' },
    dark: { panel: 'black', color: '#fff' }
  };
  console.log(themeStyle[theme]);
  return (
    <>
      <ThemeProvider theme={themeStyle[theme]}>
        <AppBar>
          <Switch onChange={actionChangeTheme} />
          <button onClick={actionGetPeople}>GET</button>
        </AppBar>
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
      </ThemeProvider>
    </>
  );
};

export default Main;
