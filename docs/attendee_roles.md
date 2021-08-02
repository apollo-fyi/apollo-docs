# Attendee roles

[Apollo Premium](https://apollo.fyi/premium) allows event organizers to
configure a Discord role to add to event attendees.

There are two options for assigning a role to attendees:

- Have Apollo create a [temporary role](#temporary-attendee-roles) for you; or
- Use an [existing role](#persistent-attendee-roles) on your server

Once an attendee role is setup, attendees will be given the role when they sign
up for the event. The role will be removed from attendees when they remove their
signup, or the event is deleted.

!!! warning "Permission check"
    Apollo must have the `Manage Roles` permission in order to assign roles to
    attendees.

## Temporary attendee roles
When using a temporary role, Apollo will create a role in the format of:
```
apollo-<event_name>-<event_number>
```

For example, an event titled `Clan Games Night` that is the fifth event created
on a server would have a temporary role with the name
`apollo-clan-games-night-5`.

Temporary roles are deleted when the event is deleted, or when the event is
modified to no longer have a temporary attendee role.

### Enable by default

If desired, Apollo can be configured to create a temporary attendee role for all
new events by default with `!server temp_role on`.

This command requires the `Manage Server` permission to invoke.

!!! note
    If temporary roles are enabled by default, they can still be configured on a
    per event basis.

## Persistent attendee roles

When using an existing role as the attendee role, Apollo will add and remove the
role to attendees as they update their responses.

When the event is deleted, the role will be removed from all attendees.

!!! note
    Apollo will not allow users to assign a persistent attendee role if they
    don't personally have permission to `Manage Roles` on the server.

!!! warning
    When using a persistent attendee role, the role must be **below**
    Apollo's highest role in the role hierarchy list, otherwise Apollo will not
    be able to add the role to attendees.

### Multiple events

When multiple events share the same persistent attendee role, the role is only
removed from an attendee when they are not signed up for any events with the
persistent attendee role.

!!! example
    John signs up for two events, both of which have the same persistent
    attendee role.

    John's attendee role will be removed when his responses are removed from
    both events. Response removal can occur by John manually removing his
    signup, but it will also occur if the event is deleted.

## Using attendee roles

!!! info inline end
    Attendee roles are granted to users who sign up for signup options that have
    **reminders enabled**.

    By default, only the **Accepted** option has reminders enabled, but this can
    be configured on a per event basis.

An attendee role can be configured during event creation on the advanced options
prompt (the last prompt when creating an event).

When the attendee role option is selected, you’ll have the option to let Apollo
create a temporary attendee role, or to specify an existing role to assign to
attendees.

## Modify attendee roles

Attendee roles can be fully modified for both single and recurring
events.

When an event attendee role is added, removed, or updated, we’ll go through the
list of attendees on the event to ensure that their attendee role is correct.

!!! note
    When updating an attendee role for an event with a large number of
    attendees, it can take a minute to update everyone’s role.
