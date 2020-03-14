import React from 'react';
import { Switch } from './elements';
interface IProps {
  onChange: () => {};
}
const Element: React.FC<IProps> = props => {
  return (
    <>
      <Switch>
        <input type='checkbox' onChange={props.onChange} />
        <span className='round'></span>
      </Switch>
    </>
  );
};

export default Element;
