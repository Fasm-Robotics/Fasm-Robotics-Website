============
Installation
============

This guide explains how to install and set up FASM Robotics.

Prerequisites
-------------
Before installing, ensure you have:

- **Python 3.9+** installed
- **Node.js & npm** (for the frontend)
- **Sphinx** (for documentation)
- **Git** (to clone the repository)

Installation Steps
------------------

1. Clone the repository:
   .. code-block:: bash

      git clone https://github.com/Fasm-Robotics/Fasm-Robotics.git
      cd Fasm-Robotics

2. Set up the backend:
   .. code-block:: bash

      pip install -r requirements.txt

3. Set up the frontend:
   .. code-block:: bash

      cd frontend
      npm install

4. Run the application:
   .. code-block:: bash

      npm start  # Starts the frontend
      python app.py  # Starts the backend

Next Steps:
^^^^^^^^^^^
- Learn how to use the system in the :doc:`usage` section.
