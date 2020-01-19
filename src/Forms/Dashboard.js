import React from 'react';
import { render } from 'react-dom';

import Donut from 'react-svg-donuts';

const progress = 50;


const renderProgress = progress => <strong>{progress}%</strong>;

render(<Donut progress={progress} onRender={renderProgress} />, document.getElementById('root'));