import React from 'react';

import './Content.css';
import Mainbar from './mainbar/Mainbar';
import Sidebar from './sidebar/Sidebar';

export default function Content() {
    return (
    <div className="content"> 
        <div className="bar-wrapper">
            <Mainbar />
            <Sidebar />
        </div>

    </div>
    );
}