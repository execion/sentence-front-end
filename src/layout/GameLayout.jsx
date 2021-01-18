import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Game from '../game/Game';
import Header from '../header/Header';
import { getSentences } from '../sentence/actions';

const GameLayout = ({init, getSentences}) => {
  useEffect(() => {
    getSentences();
  },[getSentences])

  if(init) {
    return (
      <>
        <Header />
        <Box display="flex" justifyContent="center" mt={25}>
          <CircularProgress size={100}/>
        </Box>
      </>
    )
  }
  return (
    <>
      <Header />
      <Game />
    </>
  );
}

const mapStateToProps = ({sentenceState}) => {
  return {
    init: sentenceState.loading
  }
}


export default connect(mapStateToProps, {getSentences}) (GameLayout);