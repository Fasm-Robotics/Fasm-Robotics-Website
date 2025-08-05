Robot Arm API
=============

Connect
-------

**URL**: `POST /connect`  
**Description**: Connects the robotic arm by initializing the Arduino connection (example COM port).  
**Body example**:

.. code-block:: json

    {
        "port": "COM4"
    }

Disconnect
----------

**URL**: `POST /disconnect`  
**Description**: Terminates the connection with the robotic arm.

Reset
-----

**URL**: `POST /reset`  
**Description**: Resets the arm (motors to 0, XYZ position to (0, 0, 0)).

Reverse Kinematics
------------------

**URL**: `POST /reverseK`  
**Description**: Computes the angles of each motor to reach the given XYZ position.  
**Body example**:

.. code-block:: json

    {
        "x": 100,
        "y": 0,
        "z": 200
    }

Set Motor Angle
---------------

**URL**: `POST /set-motor-angle`  
**Description**: Sets the angle of a specific motor.  
**Body example**:

.. code-block:: json

    {
        "motor": "SH3",
        "angle": 0
    }

Set Sync Angles
---------------

**URL**: `POST /set-sync-angles`  
**Description**: Sets all motor angles simultaneously.  
**Body example**:

.. code-block:: json

    {
        "angles": [0, 45, 90, 0]
    }

Get Motor Angle
---------------

**URL**: `GET /get-motor-angle?motor=SH2`  
**Description**: Returns the current angle of a specific motor.

Calibrate Motor
---------------

**URL**: `POST /calibrate`  
**Description**: Calibrates a specific motor.  
**Body example**:

.. code-block:: json

    {
        "motor_id": 1
    }

Calibrate All (Sync)
--------------------

**URL**: `POST /calibrate-sync`  
**Description**: Calibrates all motors synchronously.

Set Closed-Loop Mode
--------------------

**URL**: `POST /set-closed-loop`  
**Description**: Enables or disables the closed-loop mode for a specific motor.  
**Body example**:

.. code-block:: json

    {
        "motor": "SH1",
        "enabled": true
    }

Set Idle
--------

**URL**: `POST /set-idle`  
**Description**: Sets a motor (or all motors) to idle mode.  
**Body example**:

.. code-block:: json

    {
        "motor_id": 1
    }
