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
├─ classes/
├─ data_source/
├─ globals/
├─ utils/
├─ .gitignore
├─ requirements.txt
└─ server.py
```
- **`classes/`**  
  Contains Python classes, each defined in a separate file.

- **`data_source/`**  
  Stores the server's data sources (e.g., `.json` or SQLite `.db` files).

- **`globals/`**  
  Contains Python files intended for global/shared access.

- **`utils/`**  
  Includes helper classes and utility functions.

- **`.gitignore`**  
  Specifies files and directories to be ignored by Git.

- **`requirements.txt`**  
  Lists Python packages required for the project.

- **`server.py`**  
  Core of the server application. Defines API endpoints and manages main logic.

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

