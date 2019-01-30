import React, {Component} from 'react';
import {HeatmapUtilities} from '../lib/heatmap-utilities.js';

class HeatmapCell extends Component {
    render() {
        const {min, max, gradient, value} = this.props;
        const backgroundColor = HeatmapUtilities.getColorFromFrequency(min, max, gradient, value);

        return (
            <div style={{margin: 1, width: '10px', height: '10px', fontSize: 0, lineHeight: 1, backgroundColor}}>&nbsp;</div>
        );
    }
}

export default HeatmapCell;