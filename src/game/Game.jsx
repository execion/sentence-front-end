import React, { useEffect, useReducer } from "react";
import { connect } from "react-redux";
import { typeGame } from "./actions";
import AudioButton from "./AudioButton";
import ListWord from "./ListWord";
import Counter from "./Counter";
import { gameReducer } from "./gameReducer";
import { defaultState } from "./state";
import { stateToCounter, sentenceId, sendScore } from './helper';
import { Box, CircularProgress, Grid } from "@material-ui/core";

const Game = ({sentences}) => {
    const [state, dispatch] = useReducer(gameReducer, defaultState);

    const alternateLetter = (id, type) => dispatch(
        {
            type: type,
            payload: id,
        }
    );

    const nextSentence = () => {
        if(state.question.length === 0 && state.sentence.length > 0) {
            sendScore(state.answer, state.sentence[state.index], dispatch);
            dispatch({type: typeGame.NEXT_SENTENCES});
        }
    }

    useEffect(() => {
        dispatch({type: typeGame.INSERT_SENTENCES, payload: sentences}) //Carga las oraciones en el state
        // eslint-disable-next-line
    },[sentences]);

    if (state.loaded) {
        //Si la oración esta cargada en el state, comienza.
        return (
            <Box display="flex" flexDirection="column" alignItems="center">
                <Counter count={stateToCounter(state)} />
                <AudioButton id={sentenceId(sentences, state)}/>

                <Box minHeight="6rem" my="2rem">
                    <Grid
                        container
                        spacing={2}
                        justify={"center"}
                    >
                        <ListWord words={state.answer} AlternateLetter={alternateLetter} Types={typeGame.ANSWER}/>
                    </Grid>
                </Box>

                <Grid
                    container
                    justify={"center"}
                    spacing={2}
                >
                    <ListWord nextSentence={nextSentence} words={state.question} AlternateLetter={alternateLetter} Types={typeGame.QUESTION}/>
                </Grid>
            </Box>
        );
    } else {
        return(
            <Box display="flex" justifyContent="center" mt={25}>
                <CircularProgress size={100}/>
            </Box>
        );
    }
};

const mapStateToProps = ( { sentenceState } ) => {
    return {
        sentences: sentenceState.sentences,
        init: !sentenceState.loading   
    };
};

export default connect(mapStateToProps, undefined)(Game);
