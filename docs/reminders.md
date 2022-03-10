# Reminders

By default, Apollo will send a reminder to event attendees **15** minutes prior to
the scheduled start time of the event.

!!! info
    The timing of reminders can be modified with the `/settings reminder_interval`
    command, which applies to all events on the server.

When it's time to send a reminder, Apollo will create a public thread on the
event and send a reminder in the thread that mentions relevent attendees. If a
thread already exists for the event, Apollo will send a reminder in the existing
thread.

## Configuring reminders

Reminders are sent when:

- The user has reminders enabled
- The user is signed up for an option that has reminders enabled

Users are opted in to reminders by default, but they can opt out with
`/reminders off`.

By default, only the **Accepted** signup option has reminders enabled, but this
can be configured during event creation or when editing an event.

## Channel reminders

By default reminders are sent in a thread, but they optionally be sent in the
event channel instead via the `/settings thread_reminders` command.
