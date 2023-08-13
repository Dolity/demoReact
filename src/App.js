import './App.css';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import TatooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';
import React, { useState } from 'react';


function App() {

    const [selectedTattoo, setSelectedTatoo] = useState(null);
    const [searchText, setSerachText] = useState('');

    function onTattooOpenClick(theTattoo) {
        setSelectedTatoo(theTattoo);
    }

    function onTattooCloseClick() {
        setSelectedTatoo(null);
    }

    const tattooElement = tattoos.filter((tattoo) => {
        return tattoo.title.includes(searchText);
    }).map((tattoo, index) => {
        return <TatooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick} />;
    });

    let tattooPost = null;
    if (!!selectedTattoo) {
        tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick} />
    }

    return (
        <div className="app">
            <AppHeader />
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSerachText} />
                    <div className="app-grid">
                        {tattooElement}
                    </div>
                    {tattooPost}
                </div>
            </section>
        </div>
    );
}

export default App;
