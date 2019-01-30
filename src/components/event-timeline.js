import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EventTimelineItem from './event-timeline-item.js';

const monthIndex = 7;
class EventTimeline extends Component {
    render() {
        const items = this.props.events.map((event, eventIndex, events) => {
            const isDayBoundary = eventIndex === 0 || events[eventIndex - 1].start !== event.start;
            const isMonthBoundary = eventIndex === 0 || events[eventIndex - 1].start.substring(0, monthIndex) !== event.start.substring(0, monthIndex);
            return (
                <React.Fragment>
                    {isMonthBoundary ? <h4>{event.start.substring(0, monthIndex)}</h4> : null}
                    {isDayBoundary ? <h5>{event.start}</h5> : null}
                    <EventTimelineItem
                        key={`${event.id}-${event.context.position}`}
                        event={event}
                        onEventClick={this.props.onEventClick}
                        maximumEventLength={this.props.maximumEventLength}
                        isFocused={this.props.focus.selectedEventId ? this.props.focus.selectedEventId === event.id : true}
                    />
                </React.Fragment>
            );
        });

        return (
            <ul style={{listStyleType: 'none', margin: 0, padding: '1em'}}>
                {items}
            </ul>
        );
    }
}

EventTimeline.propTypes = {
    events: PropTypes.array.isRequired,
    onEventClick: PropTypes.func.isRequired,
    maximumEventLength: PropTypes.number.isRequired
};

export default EventTimeline;