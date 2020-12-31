import React from 'react'
import { connect } from 'react-redux';

const Sentences = ({ loading, sentences }) => {

    if(loading) {
        return (
            <>
                <header>Hello</header>
            </>
        );
    }
    return (
        <section>
            <h2>Sentences</h2>

            <ul>
                {sentences.map( item => {
                    return(
                        <li key={item.id}>
                            {sentences.indexOf(item) + 1} - {item.sentence}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
    
}
const mapStateToProps = ({sentenceState: { loading, sentences } }) => {
    return {loading, sentences};
}
export default connect(mapStateToProps, undefined )(Sentences);