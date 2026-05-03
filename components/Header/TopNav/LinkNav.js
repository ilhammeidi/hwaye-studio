import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Link from 'next/link'
import { useTranslation } from 'next-i18next';
import LocaleLink from '../../Link';
import navMenu from '../data/single';

function LinkNav(props) {
  const { t } = useTranslation('common');
  const { menuPrimary, singleNav } = props;

  return (
    <ul>
      {menuPrimary.map(item => (
        <li key={item.id.toString()}>
          <Button component={LocaleLink} to={'/' + item.url}>
            {item.name}
          </Button>
        </li>
      ))}
    </ul>
  );
}

LinkNav.propTypes = {
  menuPrimary: PropTypes.array.isRequired,
  singleNav: PropTypes.bool,
};

LinkNav.defaultProps = {
  singleNav: false
};

export default LinkNav;
