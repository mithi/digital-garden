# Malaya / Lawin
> A friendly and affordable acrobatic drone for amateurs

## Introduction
Back in 2015, I watched Raffaello D’ Andrea’s ted talk about the astounding athleticism of quadrotors. Since then, I’ve often wondered if it’s possible for the average person outside the academe to recreate those amazing acrobatic maneuvers at home. I skimmed through research papers and quickly realized that it’s extremely difficult for me. It’s been awhile since I’ve dealt with greek letters and other mathematical symbols. 

My vision is to build an accessible indoor quadrotor that could perform these amazing aggressive maneuvers autonomously.

## Goals
- Try to keep the cost a minimum 
- Understandable code 
- Great and friendly write-ups, written for the average maker, NOT PhDs
- Readily-available hobby grade parts
- Arduino-based, it has a wonderful community of makers already familiar with it 
- Extensible - Small enough to be flown indoors, but large enough to add additional sensors and other components

## Base Hardware
- Eachine Tyro79s Ready To Fly Drone
- Adafruit Feather M4 Express
- Adafruit Featherwing Wifi - Adafruit AirLift FeatherWing – ESP32 WiFi Co-Processor
- Adafruit 9-DOF Absolute Orientation IMU Fusion Breakout - BNO055 - STEMMA QT / Qwiic
- Neopixels

## Tools
- Solder, Soldering Iron, Wires, Multimeter

## Optional Add-ons
- VL53L0X Time of Flight Distance Sensor - ~30 to 1000mm - for Obstacle detection
- Raspberry Pi Zero W and Camera - for Vision

## Readings
- https://github.com/hbd730/quadcopter-simulation 
- https://github.com/AtsushiSakai/PythonRobotics/tree/master/AerialNavigation/drone_3d_trajectory_following
- https://github.com/nikhilkalige/quadrotor/
- https://github.com/prgumd/prg_QuadrotorPapers
- http://www.matthewpeterkelly.com/tutorials/trajectoryOptimization/index.html
- http://underactuated.csail.mit.edu/acrobot.html#section3
- http://brokking.net/
- https://oscarliang.com/build-racing-drone-fpv-quadcopter/
- https://dronenodes.com/how-to-build-a-drone/
