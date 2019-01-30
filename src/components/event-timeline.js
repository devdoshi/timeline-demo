import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EventTimelineItem from './event-timeline-item.js';

class EventTimeline extends Component {
    render() {
        const items = this.props.events.map((event) => {
            return (
                <EventTimelineItem
                    event={event}
                    onEventClick={this.props.onEventClick}
                    maximumEventLength={this.props.maximumEventLength}
                    isFocused={this.props.focus.selectedEventId ? this.props.focus.selectedEventId === event.id : true}
                />
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