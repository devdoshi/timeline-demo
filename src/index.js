import React from 'react';
import {render} from 'react-dom';
import timelineItems from './timelineItems';
import EventHeatmap from './components/event-heatmap.js';
import EventTimeline from './components/event-timeline.js';
import flatMap from 'lodash.flatmap';
import {addDays, differenceInCalendarDays, format} from 'date-fns';

function eventToEventsByDay(event) {
    const {start, end} = event;
    const daysBetween = differenceInCalendarDays(end, start);
    let output = [];
    let cursor = 0;
    while (cursor <= daysBetween) {
        const date = addDays(start, cursor);
        const dateString = format(date, 'YYYY-MM-DD');
        output.push({
            ...event,
            context: {
                position: cursor + 1,
                of: daysBetween + 1
            },
            start: dateString,
            end: dateString
        });
        cursor++;
    }
    return output;
}
const eventsSplitAndSortedByDay = flatMap(timelineItems, eventToEventsByDay);

function sortByStartAndEndDate(eventA, eventB) {
    const {start: startA, end: endA} = eventA;
    const {start: startB, end: endB} = eventB;
    const startComparision = startA.localeCompare(startB);
    if (startComparision === 0) {
        return endA.localeCompare(endB);
    }

    return startComparision;
}

eventsSplitAndSortedByDay.sort(sortByStartAndEndDate);

const maximumEventLength = Math.max(...timelineItems.map(event => differenceInCalendarDays(event.end, event.start)));
const startDate = (Math.min(...timelineItems.map(event => new Date(event.start).getTime())));
const endDate = (Math.max(...timelineItems.map(event => new Date(event.end).getTime())));
console.log({maximumEventLength, startDate, endDate});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEventId: null,
            startDate: null,
            endDate: null
        };
    }

    handleEventClick = (eventId) => {
        this.setState({
            selectedEventId: eventId
        });
    };

    handleDateRangeChange = (startDate, endDate) => {
        this.setState({
            startDate,
            endDate
        });
    };

    render() {
        return (
            <div>
                <h3>Events from {format(startDate, 'YYYY-MM-DD')} to {format(endDate, 'YYYY-MM-DD')}</h3>
                <EventHeatmap
                    onDateRangeChange={this.handleDateRangeChange}
                    events={eventsSplitAndSortedByDay}
                    startDate={startDate} endDate={endDate}
                    maximumEventLength={maximumEventLength}
                    focus={this.state}
                />
                <EventTimeline
                    onEventClick={this.handleEventClick}
                    events={eventsSplitAndSortedByDay}
                    maximumEventLength={maximumEventLength}
                    focus={this.state}
                />
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
