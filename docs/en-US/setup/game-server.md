---
outline: deep
---
::: warning
This section is still under construction. Further changes might be applied.
:::

# Setting up the server

To set up with this part, be sure you've got [Python](https://www.python.org/) installed (at least ver >= 3.10).

Once you've done, look for the `ServerStuff` folder, that's where all the backend stuff happens.

### Basic folder structure
```
├─ banlists
├─ cardData.json
└─ server.py
```

### Setup virtual enivronment
This is a practice that you always have to do when working with Python projects. You'll have to create a virtual environment right on the project.

The setup method depends on which OS you are running on:
:::tabs
== VS Code
If you use VS Code, the program should handle it for you.
== Windows
Windows
== Linux
In the folder, type the following command 
```sh
python3 -m venv .venv
```
It should generate a `.venv`                        folder with everything inside.

Afterwards, activate the environment using:
```sh
source .venv/bin/activate
```
:::

### Run the server
To start the server, run the following command
```sh
uvicorn server:app --reload
```

