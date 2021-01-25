import React, { useEffect } from 'react'
import Word from "./Word";

const ListWord = ({words, AlternateLetter, Types, nextSentence}) => {
    useEffect(() => {
        if(words.length === 0 && nextSentence) {
            nextSentence()
        }
    },[words, nextSentence])
    return (
        <>
            { 
                words.map((item) => {
                        return (
                            <Word
                                key={item.id}
                                data={item}
                                type={Types}
                                alternateLetter={AlternateLetter}
                            />
                        );
                    }
                )
            }
        </>
    );
}

export default ListWord;