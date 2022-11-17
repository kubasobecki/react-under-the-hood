import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
    const [showParagraph, setShowParagraph] = useState(false);

    console.log('APP RUNNING!');

    const toggleParagraphHandler = useCallback(() => {
        setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }, []);

    return (
        <div className="app">
            <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
            <h1>Hi there!</h1>
            <DemoOutput show={false} />
        </div>
    );
}

export default App;
