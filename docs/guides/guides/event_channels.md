---
description: Keep it clean by organizing events with event channels.
slug: /event_channels
sidebar_position: 4
---

# Event channels

Event channels are regular Discord text channels that Apollo will take over,
allowing events in the channel to be sorted, or for non event messages to be
purged when a new event is posted.

## Create an event channel

Event channels are created with the `/channel new` command. By default, this
creates a new channel. To convert an existing channel to an event channel,
use the optional `channel` parameter to select the channel you want to convert.

The user issuing the command must have the `Manage Server` permission or have
the Discord role designated to allow channel creation.

To allow additional users to create event channels, you can assign an event
channel role with `/settings role channel`. This will allow any user with
the given role to create event channels.

## Required permissions

To create an event channel, Apollo must have the follow permissions.

- Read Messages
- Read Message History
- Manage Channels

:::info
If you run into permission issues, be sure to check your category permission
overrides for Manage Channels.
:::

## Add events

When issuing the `/event` command outside of an event channel, the first prompt
will ask if you'd like to post the event in the current channel, another
channel, or in one of your event channels. The option to select an event channel
is only present if one or more event channels are configured.

If the `/event` command is issued from within an event channel, the initial
prompt to select a channel is skipped and the event will be created in the same
channel.

## Sort an event channel

Event channels can sort events by chronological order with the `/sort` command.
To reverse the sort order, use `/sort descending`.

Users must have the `Manage Server` permission to use the `/sort` command and
have voted for Apollo on [top.gg](https://top.gg/bot/475744554910351370/vote) in
the last twelve hours. The voting requirement is bypassed if there is an active
Premium membership.

An event channel can only be sorted if there are **10** or fewer events in the
channel. This limit is increased to **25** if there is an active Premium membership.

## Purge non event messages

By default non event messages (that aren't pinned) are purged from an event
channel when a new event is posted or deleted. The goal of this feature is to
maintain an event channel as a place for events only, free of distraction.

This can be disabled with the `/settings purge off` command.

:::note
When a message with a thread (that isn't an event message) is deleted as
part of a purge, the thread remains intact.
:::
