# Creating events

Events are created with the `/event` command.

!!! info
    Event creation occurs in a direct message, so you must be able to receive DMs
    from Apollo.

Apollo will then walk you through a guided event creation process, asking you to
provide the following:

- The name of the event
- The start time of the event (including time zone)

You may also optionally provide:

- An event description
- An event duration
- A limit on the number of attendees
- Details on how often the event repeats
- A set of roles to mention when the event is posted

There are also additional options that can be configured if the server has an
active [Premium](https://apollo.fyi/premium) membership.

## Permissions

By default anyone can create events, but this can be restricted to users with a
certain role with the `/settings role event` command.
