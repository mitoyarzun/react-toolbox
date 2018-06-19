import React from 'react';
import PropTypes from 'prop-types';
import { matchPath } from 'react-router';
import { List, ListItem } from 'react-toolbox';
import classnames from 'classnames';
import components from '../modules/components';
import style from './navigation.scss';

const MainNavigation = ({ className, history }) => {
  const drawerItems = Object.keys(components).map((key) => {
    const isActive = matchPath(history.location.pathname, {
      path: components[key].path
    });
    return (
      <ListItem
        key={key}
        caption={components[key].name}
        className={classnames(style.item, { [style.active]: isActive })}
        selectable
        onClick={() => { history.push(components[key].path);}}
      />
    );
  });

  return (
    <aside className={classnames(style.root, { [className]: className })}>
      <List className={style.list} selectable ripple>
        {drawerItems}
      </List>
      <footer className={style.footer}>
        <span>React Toolbox © 2016</span>
      </footer>
    </aside>
  );
};

MainNavigation.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object
};

MainNavigation.contextTypes = {
  router: PropTypes.object
};

export default MainNavigation;
