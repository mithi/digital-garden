# Simple Pendulum 

How to control a simple pendulum 

## Equations of motions
Variables and constants
```py
theta = angle wrt downward force
dtheta = angular velocity
dd_theta = angular acceleration
g = gravity 
l = length of rod
b = viscous damping coefficient 
m = mass
u = control torque input (Nm)

(moment of inertia, with these assumptions) 
 I = m * l * l
 But it can also be modeled as I = Icm + m* l * l
 where Icm is the intertia of the center of mass
```

The derived equations of motion 
```py
m * l * l * dd_theta + m * g * l * sin(theta) = -b * dtheta + u

# don't forget to clip the input torque (-max_torque, max_torque)
# and also add noise
```
if we rearrange in terms of angular acceleration `ddtheta`
```py
ddtheta = (u - b * dtheta) / (m * l * l) - g / l * sin(theta) 
```
and of course
```py
new_theta = old_theta + dt * old_dtheta
new_dtheta = old_dtheta + dt * old_ddtheta

# Don't forget to wrap the angle to be within 
# [-180, 180] degrees or [-pi, pi] radians
```

## Linearizing
We can use taylor series expansion to make a linear model 
near `theta_star = pi` (when the pendulum is almost right side up)

Here's the first order  tailor series approximation formula for our case
```py
dq = f(q, u)
   approximately: 
	=  f(q*, u*) 
	   + partial_df/parial_dq(q*, u*) * (q - q*)
	   + partial_df/partial_du(q*, u*) * (u - u*)
```
In our case we want use this taylor series expansion with our equation of motions,  to get  `A` and `B`
```
q_dot_error
 = [dtheta_error, ddtheta_error] 
 = A * (q - q*) + B * (u - u*)

where:
[q - q*] = [theta_error, dtheta_error]
[u - u*] = [u_error]
```
Solving for `A` and `B` we get:
```
A = [[0, 1], [-cos(theta_star) * g / l, - b / (m * l * l)]
B = [0, 1 / ( m * l * l )]
```

We use this `A`, `B` to compute for our gain matrix using our linear quadratic regulator. (We specify matrix `Q` and `R`)

```

lqr_gain = lqr(A, B, Q, R)
```
## Energy and Desired Energy to swing up

Our desired potential energy is the energy when the pendulum is directly pointing up (no kinetic energy_
```
desired_energy = m * g * l
```
And the current total energy at any state
```
current_energy 
	= potential_energy (mgh) + kinetic_energy (1/2 * m * v_squared)
	= 1 / 2 * m * l * l * dtheta * dtheta - m * g * l * cos(theta)
```
When we are not near the desired position (`theta_star = pi`)
We can set our torque input to be proportional to the energy we need to get to our desired energy
```
swingup_gain = tuned gain
dtheta = angular_velocity
energy_error = current_energy - desired_energy
u = - swingup_gain * energy_error * dtheta
```

## Putting it all together (pseudo code)
1. Set Q and R and computed the 	`lqr_gain`
Q is a 2x2 diagonal matrix because our state has a length of 2. R is a 1d vector because our control input has a length of 1.
- Read more about LQR but in essence if Q is high we care a lot about minimizing the error in our state, if R is high then we don't want our control input to be too aggressive, we want it to be small. 
```
lqr_gain_matrix = lqr(A, B, Q, R)
```
2.  Set the gain when we are swinging up instead.

```py
while True:
	state_vector = pendulum.get_state()
	state_error_vector = state - desired_state #our desired state is [theta=pi, dtheta=0]
	if theta_error is small (we are near our desired theta):
		# use lrq
		u = -lqr_gain_matrix * state_error
	else: 
		# use swing up by energy shapping
		energy_error = pendulum.current_energy() - desired_energy(m * g * l)
		u = -swingup_gain * dtheta * energy_error
	
	pendulum.add_torque(u)
	
```
Nice references:
 = primary reference: [Russ Tedrake](http://underactuated.csail.mit.edu/pend.html)
-  [Jon Michaux](https://jmichaux.github.io/_notebook/pendulum/)
- [Mathew Peter Kelly](http://www.matthewpeterkelly.com/tutorials/simplePendulum/index.html)
- [Gereshes (Ari Rubinsztejn)](https://gereshes.com/2019/03/04/an-introduction-to-phase-portraits/)

