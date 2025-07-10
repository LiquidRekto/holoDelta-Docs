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

### Installing Python

:::tabs
== Windows
Simpliest way is go to python's [official website](https://www.python.org/downloads/windows/).
Choose the version you want and download the executable based on your system.
(Recommended to choose the version from 3.10.x or above).

![Image: Releases](/images/docs/game-server/2.png){style="width: 70%; margin:0 auto;"}

Once downloaded, open the installer and proceed with the installation process.
== Linux
Depends on your distro, yours could have Python installed right from the start.
:::

### Setup virtual enivronment

This is a practice that you always have to do when working with Python projects. You'll have to create a virtual environment right on the project.

The setup method depends on which OS you are running on:
:::tabs
== VS Code
Make sure you have [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
installed on VSCode.

Once you have done so, create a Python environment by following the steps below:

1. Navigate to this section.

   ![Image: Releases](/images/docs/game-server/1.png){style="width: 80%; margin:0 auto;"}

2. At the upper middle, you will see this dialog. Select **Create Virtual Environment**.

   ![Image: Releases](/images/docs/game-server/3.png){style="width: 80%; margin:0 auto;"}

3. Then, select **Venv**.

   ![Image: Releases](/images/docs/game-server/4.png){style="width: 80%; margin:0 auto;"}

4. After that, select your installed Python version.

   ![Image: Releases](/images/docs/game-server/5.png){style="width: 80%; margin:0 auto;"}

5. Check **requirements.txt** and click **OK**.

   ![Image: Releases](/images/docs/game-server/6.png){style="width: 80%; margin:0 auto;"}

6. VSCode will then perform the creation of Python virtual environment and install all dependencies listed in _requirements.txt_. Wait for this popup to finish.

   ![Image: Releases](/images/docs/game-server/7.png){style="width: 80%; margin:0 auto;"}

7. Restart VSCode and if you see this. Which mean your environment is ready to go.

   ![Image: Releases](/images/docs/game-server/9.png){style="width: 60%; margin:0 auto;"}

8. If you want to access the environment, open the VSCode. This will depend on your operating system:

Windows:

```powershell
.\.venv\Scripts\activate
```

Linux:

```sh
source .venv/bin/activate
```

== Windows
Windows

== Linux
In the folder, type the following command

```sh
python3 -m venv .venv
```

It should generate a `.venv` folder with everything inside.

Afterwards, activate the environment using:

```sh
source .venv/bin/activate
```

Install python libaries via `requirements.txt` if you haven't (requires you to install pip)

```sh
pip install -r requirements.txt
```

:::

### Run the server

To start the server, run the following command

```sh
uvicorn server:app --reload
```
