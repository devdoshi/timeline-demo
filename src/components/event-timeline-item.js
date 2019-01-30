import React, {Component} from 'react';
import HeatmapCell from './heatmap-cell.js';
import {gradient} from '../lib/heatmap-utilities.js';

class EventTimelineItem extends Component {
    handleClick = () => {
        this.props.onEventClick(this.props.event.id);
    };

    render() {
        const {event} = this.props;
        return (
            <li style={{opacity: this.props.isFocused ? 1 : 0.5}}>
                <button style={{display: 'flex', border: 0, background: 'transparent', alignItems: 'center'}} onClick={this.handleClick}>
                    <HeatmapCell min={0} max={this.props.maximumEventLength} value={event.context.of} gradient={gradient}/>
                    <div style={{padding: '.25em'}}>{event.name}</div>
                    {event.context.of === 1 ? null : <div>{`(Day ${event.context.position} of ${event.context.of})`}</div>}
                </button>
            </li>
        );
    }
}

export default EventTimelineItem;