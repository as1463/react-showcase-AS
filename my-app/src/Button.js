import React from 'react';
import styled from 'styled-components';

class Button extends React.Component {

    constructor(props){
        super(props);
        this.state = {text: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            text: !state.text
        }));
    }
    
    render(){
        // Sets the style for a button using styled components.
        const NewButton = styled.button`
            font-size: 30px;
            min-width: 150px;
            background-color: #3da859;
            border: 1px solid #3da859;
            &:hover {
                background-color: #53ed7c;
                border: 1px solid #53ed7c;
            }
        `;

        return (

            <div>
                <NewButton onClick={this.handleClick}>
                    {this.state.text ? 'Hello' : 'Goodbye'}
                </NewButton>
            </div>
        );
    }
}

export default Button;