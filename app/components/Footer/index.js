import React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';

import Wrapper from './Wrapper';
import messages from './messages';

const useStyles = makeStyles(() => ({
  section: {
    margin: '50px auto',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Wrapper>
      <section className={classes.section}>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
    </Wrapper>
  );
}

export default Footer;
