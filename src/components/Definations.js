import React from 'react';
import './Definations.css';
const Definations = ({ category, word, meaning, mode }) => {
    
    return (
        <div className='meanings'>
            {
                meaning[0] && word && category === "en" && (
                    <audio src={meaning[0]?.phonetics[0]?.audio} style={{ backgroundColor: "#fff", borderRadius: 10, width:"100%" }}
                        controls
                    >
                        Your Browser doesn't support audio element.
                    </audio>
                )
            }
            {word === "" ? (
                <span className='subtitle'>Start by typing in Search</span>
            )
                :
                (
                    meaning?.map((mean) =>
                        mean?.meanings?.map((items) =>
                            items?.definitions?.map((def) => (
                                <div className='singleMean' style={{ backgroundColor:mode?"#3b5360": "white", color:mode? "white" :"black" , wordWrap:"break-word" }}>
                                    {
                                        def?.definition && (
                                            <span style={{ textTransform: "capitalize" }}>
                                                <b>Definition: </b>{def?.definition}
                                            </span>
                                        )
                                    }

                                    {
                                        def.example && (
                                            <span style={{ textTransform: "capitalize" }}>
                                                <b>Example: </b>{def.example}
                                            </span>
                                        )
                                    }

                                    {def.synonyms && (
                                        <span style={{ textTransform: "capitalize" }}>
                                            <b>Synonyms: </b>
                                            {`${def.synonyms} , `}
                                        </span>
                                    )}
                                    <hr style={{ width: "99%" }} />
                                </div>
                            ))
                        )
                    )
                )}
        </div>
    );
}

export default Definations;
