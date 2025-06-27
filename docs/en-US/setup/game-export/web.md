---
outline: deep
---

# Web Version

Basically the same as [Desktop](/en-US/setup/game-export/desktop), but instead HTML5
option is chosen.

![Image: Import project](/images/docs/game-export/7.png)

To sync with the server, please make sure that you exported to `Holodelta_web` folder inside
the `ServerStuff` folder.

![Image: Import project](/images/docs/game-export/8.png)

::: danger IMPORTANT
When you are also working on the game server, if you perform a web export, there's a high
chance that it will take **an eternity** to process. This is because the files in `ServerStuff`
also included in the Godot export, and files in `.venv`, `__pycache__` took the engine a
toll during the operation.

So before you do this, please make sure that you have deleted the following files/folders:

- Every `__pycache__` folders, these contain all python cached files.
- `.venv` and similar folders, they only support for local python development, not related to the game.

After you have done deleting those files, you can proceed with the export process.
:::
