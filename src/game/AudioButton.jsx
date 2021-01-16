import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    width: 6rem;
    height: 2.5rem;
    border-radius: .4rem;
    border: .1rem solid rgba(40,40,40,1);
    margin: 1rem 0;
    font-size: 1.7rem;
    font-weight: bolder;

    :hover {
    border: none;
    background-color: rgba(40,40,40,1);
    color: rgba(240, 240, 240, .9);
    }
`;

const AudioButton = ({id}) => {
    const [ audioPlay, setAudioPlay ] = useState(true);
    const [ audioPlayer, setAudioPlayer ] = useState(new Audio(`http://localhost:8000/api/audio/${id}`));

    useEffect(() => {
        setAudioPlayer(new Audio(`http://localhost:8000/api/audio/${id}`));
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
        <Button onClick={() => audio()}>{">"}</Button>
    );
}

export default AudioButton;