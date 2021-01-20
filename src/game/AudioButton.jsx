import React, {useEffect, useState} from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

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
        <PlayCircleOutlineIcon onClick={() => audio()} color="primary" style={{fontSize:70}}/>
    );
}

export default AudioButton;