# Frequently Answered Questions

---

## How do I request a new Apollo feature?

Head to https://feedback.apollo.fyi/ and let us know what feature you'd like added. You can view a list of all requested features, our current roadmap, and can vote on other suggestions you'd like to see in a future update.

---

## How do I view or change Apollo's prefix?

Apollo's prefix can be changed with the `!prefix` command.

---

## How do I reset my prefix?

Apollo can be mentioned directly in place of a prefix, which can be used to
reset your prefix.

`@Apollo prefix !` will reset your prefix to the default.

---

## How do I change the role needed to create an event?

To change the role, use `!server role event <role>`. To reset this role, use `!server role event None`.

---

## How do I change the default time of 15 minutes for reminders?

To configure when event reminders are delivered, use `!server reminder_interval <minutes>`. Be sure to provide the time as a number (ex: 60).

---

## How do I prevent members in my server from creating events?

You can restrict event creation to a particular role using either of the following command formats: `!server role event <Role Name>` or `!server role event <@Role> `.

---

## Why are messages being deleted from my event channel?

By default, when a new event is created in an event channel, Apollo deletes all messages in the channel that are not from Apollo or that are not pinned. This is in an attempt to keep the channel clear of non-event messages. This behaviour can be disabled with the `!server purge off` command.

---
