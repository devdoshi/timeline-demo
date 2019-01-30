import React, {Component} from 'react';
import {addDays, differenceInCalendarDays, format} from 'date-fns';
import HeatmapCell from './heatmap-cell.js';
import {gradient} from '../lib/heatmap-utilities.js';

class EventHeatmap extends Component {

    render() {
        const {events, startDate, endDate} = this.props;
        const duration = differenceInCalendarDays(endDate, startDate);
        let maximumEventsPerDay = 1;
        const frequencyPerDay = events.reduce((acc, event) => {
            const frequency = (acc[event.start] || 0) + 1;
            if (frequency > maximumEventsPerDay) {
                maximumEventsPerDay = frequency;
            }
            acc[event.start] = frequency;
            return acc;
        }, {});

        const cells = Array.from({length: duration + 1}).map((_, day) => {
            const date = addDays(startDate, day);
            const dayString = format(date, 'YYYY-MM-DD');
            const frequency = frequencyPerDay[dayString] || 0;
            return (
                <HeatmapCell
                    title={`${dayString} - ${frequency} events`}
                    min={0} max={maximumEventsPerDay} value={frequency} gradient={gradient}/>
            );
        });

        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {cells}
            </div>
        );
    }
}

export default EventHeatmap;