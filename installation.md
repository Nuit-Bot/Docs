---
title: Installation
description: Set up and run your own Nuit instance in minutes.
outline: deep
---

# Installing Nuit

Nuit is a self-hostable Discord bot. This guide walks you through running your own instance from scratch.

## Prerequisites

- [Bun](https://bun.sh) v1.3.12 or later
- A [Discord application](https://discord.com/developers/applications) with a bot token
- A PostgreSQL database (e.g. [Supabase](https://supabase.com))
- [Git](https://git-scm.com) — manual setup only

## Installation

### Using the CLI

Install the Nuit CLI globally:

```bash
bun install -g @nuit-bot/cli
```

Then run:

```bash
nuit init
```

The CLI will prompt you for a folder name, then hatch your bot by asking for:

- **Discord token** — from your Discord application's Bot page
- **Discord client secret** — from the OAuth2 page of your Discord application
- **PostgreSQL connection URL** — your database connection string
- **Better Auth base URL** — the URL your instance will be publicly accessible at

::: tip
Your Discord client ID is fetched automatically from Discord's API using your bot token — you don't need to provide it manually.
:::

### Manually

Clone the repo:

```bash
git clone https://github.com/Nuit-Bot/Nuit.git
```

Change directory into the bot:

```bash
cd Nuit
```

If you want a more stable build (so less updates, recommended for production), type this command:

```bash
git checkout origin main
```

Install packages:

```bash
bun install # --frozen-lockfile in production
```

Make the database migrations:

```bash
# Better Auth migrations
bun x auth migrate

# Drizzle ORM schema migrations
bun x drizzle-kit generate
bun x drizzle-kit migrate
```

:::tabs

== Development


In a first terminal tab, run the web server:

```bash
bun run dev:web
```

In a second terminal tab, run the bot:

**First boot/after changing a command's data:**

```bash
bun run dev --register
```

**Normal:**

```bash
bun run dev
```

== Production

Build the bot:

```bash
bun run build
```

Run the bot:

```bash
bun run start --register
```

:::

That's it! You now have Nuit running on your bot!

## Next Up

You can now start configuring the bot. See [Configuration](/configuration.md).
