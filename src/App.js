import React from 'react';
import './App.css';
import SelectAvatar from './SelectAvatar';
import SelectSkin from './SelectSkin';
import SelectShirt from './SelectShirt';
import ValidateButton from './ValidateButton';

const App = () => {
    return (
        <div className="temp-style max_width ">
            <div className="card_wrap centered flex_column">
                <div className="title_wrap max_width">
                    <h1 className="centered font_white font_size_medium">PROFIL</h1>
                </div>
                <p className="text">Lequel des ces deux avatars préférez-vous?</p>
                <SelectAvatar />
                <div className="attributes_wrap flex_around max_width">
                    <SelectSkin />
                    <SelectShirt />
                </div>
                <ValidateButton />
            </div>
        </div>
    )
}

export default App;
