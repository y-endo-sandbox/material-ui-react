import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  button: {
    fontSize: '28px',
    fontWeight: 'bold'
  },
  button2: {
    color: theme.palette.success.main
  }
}));

const IndexPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Box p={2}>
      <Button variant="outlined">ボタン default</Button>
      <Button variant="outlined" color="primary">
        ボタン primary
      </Button>
      <Button variant="outlined" color="secondary">
        ボタン secondary
      </Button>
      <Button variant="outlined" className={classes.button}>
        ボタン スタイルカスタマイズ1
      </Button>
      <Button variant="outlined" className={classes.button2}>
        ボタン スタイルカスタマイズ2
      </Button>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <p>Accordion1</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>Accordion1 detail</p>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default IndexPage;
