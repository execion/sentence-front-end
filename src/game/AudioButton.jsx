import React, {useEffect, useState} from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { Box } from '@material-ui/core';

const AudioButton = ({id}) => {
    const [ audioPlay, setAudioPlay ] = useState(true);
    const [ audioPlayer, setAudioPlayer ] = useState(new Audio(`http://localhost:8000/api/audio/${id}`));

    useEffect(() => {
        setAudioPlayer(new Audio(`http://192.168.0.190:8000/api/audio/${id}`));
        audioPlayer.load();
        setAudioPlay(true);
    // eslint-disable-next-line
    }, [id])

    const audio = () => {
        if(audioPlay) {
            audioPlayer.play();
            setAudioPlay(false);
            reload();
        } else {
            audioPlayer.pause();
            setAudioPlay(true);
        }
    }
    const reload = () => {
        let time = audioPlayer.duration.toString().replace(".","");
        Number(time);
        setTimeout(() => {
            setAudioPlay(true);
        }, time);
    }
    return (
        <Box my="1rem">
            <PlayCircleOutlineIcon onClick={() => audio()} color="primary" style={{fontSize:70}}/>
        </Box>
    );
}

export default AudioButton;