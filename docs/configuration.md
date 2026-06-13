---
title: Configuration
description: Learn how to configure Nuit to your liking.
outline: deep
---

# Configuration

Now, it's where Nuit shines: its configuration.

At the time, there isn't a lot of configuration, but there will be later.

## Config files & priorities

There are 3 different files for configuration, each in order of priority:

- `config.private.toml`: highest priority, not Git-tracked so great for machine or environment specific config.
- `config.toml`: default config, Git-tracked, best to use for sharing configs across dev and prod over the repo.
- `config.example.toml`: lowest priority, default values, should **not** be deleted

## Configuration fields

### `host`

- `allow_external_modules` (boolean): Runs installed external modules
