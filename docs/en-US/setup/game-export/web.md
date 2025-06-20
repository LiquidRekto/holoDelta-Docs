---
outline: deep
---

# Web Version

Basically the same as [Desktop](/en-US/game-export/desktop), but instead HTML5
option is chosen.

To sync with the server, please make sure that you exported to `Holodelta_web` folder inside
the `ServerStuff` folder.

::: danger IMPORTANT
When you are also working on the game server, if you perform a web export, there's a high
chance that it will take **an eternity** to load. This is because the files in `ServerStuff`
also included in the Godot export, and files in `.venv`, `__pycache__` took the engine a
toll during the operation.

So before you do this, please make sure that you have deleted the following files/folders:

- Files in `__pycache__`, these are all python cached files.
- Files in `.venv`, they only support for local python development, not for the game.

After you have done deleting those files, you can proceed with the export process.
:::
