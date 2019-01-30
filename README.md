
# How long you spent on the assignment.
~930am-12pm plus about 30 minutes thinking about it beforehand
# What you like about your implementation.
I think it is a compact timeline visualizer that is compact and conveys a lot of information and would be useful in an airtable context where you are pivoting on various characteristics
# What you would change if you were going to do it again.
- finish moving functions to their own files, etc.
- fix react warnings (keys, etc.)
- finish implementing date range changing
- fix proptypes, maybe add typescript
- use React context for some state management
- decide on a styling pattern
- text-overflow: ellipsis
- better animations
- decide on behaviors for each interaction based on user research
- coalesce adjacent days if there are no other events?
# How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.
When I read the task description, I initially thought of github contribution timelines. I also had seen a little bit of airtable's timeline ui in some videos
I wanted to create a timeline inspector that made it easy to browse, filter, etc.
# How you would test this if you had more time.
Generally speaking, Jest with basic unit tests for all of my utility functions and sorting
Enzyme or react-testing-library for ui unit/integration/e2e tests
