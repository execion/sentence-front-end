import React from 'react'
import Word from "./Word";

const ListWord = ({words, AlternateLetter, Types}) => {
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