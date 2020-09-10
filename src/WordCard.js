import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default class WordCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            attempt: '',
        }
    }

    componentWillMount() {
        let data = prepareStateFromWord(this.props.value)
        this.setState({
            word: data.word,
            chars: data.chars,
            attempt: data.attempt,
            guess: data.guess,
            completed: data.completed
        })
    }

    activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = this.state.guess + c
        this.setState({ ...this.state, guess })
        if (guess.length == this.state.word.length) {
            if (guess == this.state.word) {
                console.log('yeah!')
                this.setState({ ...this.state, guess: '', completed: true })
            } else {
                console.log('reset')
                this.setState({ ...this.state, guess: '', attempt: this.state.attempt + 1 })
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.chars.map((c, i) => <CharacterCard value={c} key={i}
                    activationHandler={this.activationHandler} attempt={this.state.attempt} />)}
            </div>
        );
    }
}
