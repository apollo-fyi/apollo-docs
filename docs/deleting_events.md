# Deleting events

Events can be deleted in two ways

- By deleting the event message (requires the `Manage Messages` permission)
- By clicking the `Delete` button on the event message

Deleting the event message will instantly delete the event. If the `Edit`
button is clicked, a confirmation prompt will be sent via a direct message.

!!! note
    When an event is deleted that Apollo has created a thread for, the thread
    is automatically archived.

## Recurring events

If an event message for a recurring event is deleted, the underlying series is
not deleted.

When the `Delete` button is selected for a recurring event, a prompt will
ask if you'd like to delete the current event only, or if you'd like to delete
the current event and prevent all future occurrences.

To delete a recurring event without also deleting an individual event, use the
`!edit` command and select the option to modify a recurring series. After
selecting the series you'd like to delete, select the option to delete the
series.

!!! info
    Deleting a recurring series does not delete associated events; they become
    regular one time events.

## Controlling access

By default, users can only delete their own events. If a user clicks on the
`Delete` button for an event they don't own, they will receive a direct
message indicating that they are missing permissions.

Users with the `Manage Server` permission can delete any event.

To allow additional users to delete events, you can assign an event deletion
role with `!server role delete <role>`. This will allow any user with the given
role to delete events.
