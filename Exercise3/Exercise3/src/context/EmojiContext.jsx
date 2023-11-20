import {createContext, useState} from 'react';

export const EmojiContext = createContext("😺");

export default function EmojiContextProvider(props){
    const [emoji, setEmoji] = useState("😺");

    return (
        <EmojiContext.Provider value={[emoji, setEmoji]}>
            {props.children}
        </EmojiContext.Provider>
    )

}