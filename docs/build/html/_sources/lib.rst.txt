
Robotic Arm Library
===================

This module provides the interface and control logic for a robotic arm, including communication with an Arduino controller and the use of inverse kinematics.

Modules and Classes
-------------------

MotorName Enum
~~~~~~~~~~~~~~
Enumeration of the available motor names in the robotic arm:
- SH1: Shoulder joint 1
- SH2: Shoulder joint 2
- SH3: Shoulder joint 3
- EL1: Elbow joint

Conversion Functions
~~~~~~~~~~~~~~~~~~~~
- **angle_to_pos(angle)**: Converts an angle in degrees to a raw motor position.
- **pos_to_angle(pos)**: Converts a raw motor position to an angle in degrees.

ArduinoInterface Class
~~~~~~~~~~~~~~~~~~~~~~
Handles serial communication with the Arduino:

- **__init__(port="COM5", baudrate=115200)**: Initializes the serial connection.
- **send_command(command)**: Sends a raw command to the Arduino.
- **calibrate(motor_angles)**: Calibrates motors except EL1.
- **set_angle(motor_angles)**: Sets motor angles.
- **set_closed_loop(motor_angles)**: Enables closed-loop mode for motors.
- **set_idle(motor_angles)**: Sets motors to IDLE mode.
- **get_latest_position(motor_angles)**: Returns the last known position.
- **get_errors()**: Retrieves current error codes.

Controller Class
~~~~~~~~~~~~~~~~
Manages high-level robotic arm control using inverse kinematics:

- **__init__(port="COM4", urdf_path="")**: Initializes Arduino interface and URDF chain.
- **get_angle(motor)**: Returns angle of one motor.
- **get_angles()**: Returns all angles.
- **get_pos()**: Returns end-effector position (x, y, z).
- **goto(x, y, z, move=True)**: Computes and sends angles to reach target position.
- **set_motor_angle(motor, angle)**: Sends one motor to a specific angle.
- **set_motors_angles(motor_angles)**: Sends multiple motors to angles.
- **reset()**: Resets angles and position.
- **calibrate_all()**: Calibrates all motors.
- **calibrate(motor)**: Calibrates one motor.
- **get_errors()**: Retrieves error codes.
- **update_from_arduino()**: Syncs internal state with Arduino.

Notes
~~~~~
- EL1 is handled as a read-only or position-derived axis.
- URDF is required to compute inverse kinematics using ikpy.
- Errors and serial exceptions are logged to the console.

