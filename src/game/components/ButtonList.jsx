import React from 'react'
import Button from "./Button";

const ButtonList = ({WordList, AlternateLetter, Types}) => {
    return (
        <>
            {
                WordList.map((item) => {
                        return (
                            <Button
                                key={item.id}
                                letter={item}
                                type={Types}
                                change={AlternateLetter}
                            />
                        );
                    }
                )
            }
        </>
    );
}

export default ButtonList;