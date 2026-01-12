---
description: Notifications about upcoming events.
slug: /reminders
sidebar_position: 5
---

# Reminders

By default, Apollo will send a reminder to event attendees prior to the scheduled start time of the event. Each event can have multiple reminders, each with its own timing.

When it's time to send a reminder, Apollo will create a public thread on the event and send a reminder in the thread that mentions relevant attendees. If a thread already exists for the event, Apollo will send a reminder in the existing thread.

## Setting up reminders

Reminders can be configured in the last step of event creation, under advanced options. Select the **Configure reminders** option to add, edit, or remove reminders for the event.

By default, new events have one reminder set to the interval configured by `/settings default_reminder_interval` (15 minutes if not changed).

### Multiple reminders

With [Premium](https://apollo.fyi/premium), you can add up to **5** reminders per event. On the free plan, events are limited to **1** reminder.

### Custom messages

[Premium](https://apollo.fyi/premium) users can add a custom message to each reminder. This message will be included in the reminder notification, which is useful for adding last-minute instructions or context for attendees.

## Who receives reminders

Reminders are sent when:

- The user has reminders enabled
- The user is signed up for an option that has reminders enabled

Users are opted in to reminders by default, but they can opt out with `/reminders off`.

By default, only the **Accepted** signup option has reminders enabled, but this can be configured during event creation or when editing an event.

## Channel reminders

By default reminders are sent in a thread, but they can optionally be sent in the event channel instead via the `/settings thread_reminders` command.
