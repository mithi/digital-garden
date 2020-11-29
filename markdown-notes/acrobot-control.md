# Acrobot Dynamics and Control Pseudocode

Please see the derivation of the acrobot here, it also contains the diagram
- Russ Tedrake - http://underactuated.csail.mit.edu/acrobot.html#section1

Standard manipulator equation form:
```python

# CONSTANTS
# I1, m1, L1, Lc1 are inertia, mass, length, and position of center of mass wrt rod 1
# I2, m2, L2, Lc2 are intertia, mass, length, and position of center of mass wrt rod 2
# g = gravitational acceleration
# dt = discrete time step

# VARIABLES
# q = [theta1, theta2]
# dq = [dtheta1, dtheta2]
# ddq = [ddtheta1, ddtheta2]


# theta1 = 0 when tip is the rod1 is pointing directly down
# the coordinates of the farther tip of rod1 and rod2# px1 = L1 * sin(theta1)
# py1 = -L1 * cos(theta1)
# px2 = L2 * sin(theta1 + theta2)
# py2 = -L2 * cos(theta1 + theta2)

def M(q):
    theta1, theta2 = q
    c1 = cos(theta1)
    c2 = cos(theta2)
    s1 = sin(theta1)
    s2 = sin(theta2)
    m00 = I1 + I2 + m2 * L1 * L1 + 2 * m2 * L1 * Lc2 *c2
    m01 = I2 + m2 * L1 * Lc2 * c2
    m10 = I2 + m2 * L1 * Lc2 * c2
    m11 = I2
    return [[m00, m01], [m10, m11]]

def C(q, dq):
    theta1, theta2 = q
    dtheta1, dtheta2 = dq
    c1 = cos(theta1)
    c2 = cos(theta2)
    s1 = sin(theta1)
    s2 = sin(theta2)
    c00 = -2 * m2 * L1 * Lc2 * s2 * dtheta2
    c01 = -m2 * L1 * Lc2 * s2 * dtheta2
    c10 = m2 * L1 * Lc2 * s2 * dtheta1
    c11 = 0
    return [[c00, c01], [c10, c11]]

def tg(q):
    theta1, theta2 = q
    s12 = sin(theta1 + theta2)
    g0 = -m1 * g * Lc1 * s1 - m2 * g * (L1 * s1 * Lc2 * s12)
    g1 = -m2 * g * Ic2 * s12
    return [g0, g1]

B = [0, 1]

class Acrobot:
    def __init__(self, theta1, theta2, dtheta1, dtheta2):
        self.state = [theta1, theta2, dtheta1, dtheta2]

    def update(self, u):
        [theta1, theta2, dtheta1, dtheta2] = self.state
        q = [theta1, theta2]
        dq = [dtheta1, dtheta2]

        # make sure to clip and add noise to the input torque first
        ddtheta1, ddtheta2 = inverse(M(q)) * (tg(q) + B * u - C(q, dq) * dq)

        new_dtheta1 = ddtheta1 + ddtheta1 * dt
        new_theta1 = theta1 + new_dtheta1 * dt + 0.5 * ddtheta1 * dt * dt

        new_dtheta2 = ddtheta2 + ddtheta2 * dt
        new_theta2 = theta2 + new_dtheta2 * dt + 0.5 * ddtheta2 * dt * dt

        # make sure to normalize the new angles to be within [-pi, pi] first
        self.state = [new_theta1, new_theta2, new_dtheta1, new_dtheta2]
        return self.state
```

## Sample code
- https://github.com/openai/gym/blob/master/gym/envs/classic_control/acrobot.py
- https://github.com/jmichaux/gym-underactuated/blob/master/gym_underactuated/envs/classic/acrobot.py
