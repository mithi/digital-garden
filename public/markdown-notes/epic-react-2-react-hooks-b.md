Part two of Epic React Hooks Notes

# Lift States Up and Colocating state
- "Lift state" up to parent when you want to share the state between two sibling component.
- In other words, put the the state management of the two siblings to the lowest common parent
then pass those states down. See also [Official React Docs: Lift states](https://reactjs.org/docs/lifting-state-up.html)
- Don't forget to colocate state when you need to. [Kent C Dodds: Colocate state to make react app faster](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)
- Colocate state means pushing the state down to only the the component that's actually using it

# Derive states instead of storing it

- [Kent C Dodds: Don't Sync State, derived it](https://kentcdodds.com/blog/dont-sync-state-derive-it), Kent provides good arguments 
on why it's better to derive states than store them
- Managed State: State that you need to explicitly manage
- Derived State: State that you can calculate based on other state

Tic-tac-toe exercise
- Based on official react tutorial: https://reactjs.org/tutorial/tutorial.html
- Will look like this: https://react-hooks.netlify.app/isolated/final/04.extra-3.js
- Here's my solution: https://gist.github.com/mithi/c7ce503eeaee2f07721b44000becf5d4

# `useRef`
- You can use the `useRef` hook to access dom nodes 
- You usually need to access dom nodes for vanilla javascript classes that are not designed for react
- IMPORTANT: You'll need to cleanup the event handles for the nodes after when the component is unmounted. 
- Do this by returning a function that cleans this up.. return this as the return value of the function passed to `useEffect`

```jsx
function MyDiv() {
  const myDivRef = React.useRef()
  React.useEffect(() => {
    const myDiv = myDivRef.current
    // myDiv is the div DOM node!
    console.log(myDiv)
  }, [])
  return <div ref={myDivRef}>hi</div>
}
```

If you check out the readme of vanilla tilt
https://github.com/micku7zu/vanilla-tilt.js

This is how you use it in Vanilla Javascript 

```js
// get the dom node with a class of `.tilt root`
const element = document.querySelector(".tilt-root");

// pass the element to the VanilaTilt class instance (?)
// you can put options in the second parameter of init
VanillaTilt.init(element, {speed: 25 });

element.vanillaTilt.destroy(); // Destroy instance
```
If you look at the source code this part a bunch of event listeners created

- https://github.com/micku7zu/vanilla-tilt.js/blob/83e691f58a12a72f870d526e8817d8d16607fbff/src/vanilla-tilt.js#L90

You have to call the destroy function 

- https://github.com/micku7zu/vanilla-tilt.js/blob/83e691f58a12a72f870d526e8817d8d16607fbff/src/vanilla-tilt.js#L127

to remove all the attached event listeners along with cleaning up other things

Translating it to React 

```jsx
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
  const tiltRef = React.useRef()

  React.useEffect(() => {
    const {current: tiltNode} = tiltRef // const tiltNode = tiltRef.current
    VanillaTilt.init(tiltNode, { speed: 400 })
    return () => tiltNode.vanillaTilt.destroy() // clean up event handlers when component unmounts
  }, [])

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}
```


# http request
- You can useEffect when directly interacting with dom nodes and using browser apis like local storage
- You can also call an http request in a `useEffect` hook
- You can't return anything other than a clean up function with `useEffect`

Because of this you cant do the thing below because `async` functions return a promise automatically
```js
// this does not work, don't do this:
React.useEffect(async () => {
  const result = await doSomeAsyncThing()
  // do something with the result
})
```

So we should do it like this
```js
React.useEffect(() => {
  async function effect() {
    const result = await doSomeAsyncThing()
    // do something with the result
  }
  effect()
})
```

This ensures that you are not returning anything that is not a clean up function

You can also do
```js
React.useEffect(() => {
  doSomeAsyncThing().then(result => {
    // do something with the result
  })
})
```

# Answers to Questions
Other answers to question https://gifted-feynman-32f319.netlify.app/

### Q

New syntax!
```js
const hello = (x = 5, {a = 10, b = 20} = {}) => console.log(x, a, b)

hello() // 5, 10, 20
hello(2, {a: 7}) // 2, 7, 20
hello(2, {b: 3}) // 2, 10, 3

const hello2 = (x = 5, {a, b} = {a: 10, b: 20}) => console.log(x, a, b)
hello2() // 5 10 20
hello2(1, {a: 1}) // 2, 1, undefined
hello2(1, {b: 1}) // 2, undefined, 1

undefined
```
### Q

```js
const newBoard = [...board] // const doesnt mean immutability
newBoard[squareId] = solveCurrentPlayer(board)
```

### Q
It's sometimes just a matter of preference
https://kentcdodds.com/blog/function-forms
```js

function MyComponent(props) {
  function subMethod() {}
}

const MyComponent = props => {
  const subMethod = () => {}
}
```

### Q
- Difference between `for.. in` and `for.. of`
- https://medium.com/better-programming/what-is-the-difference-between-for-in-and-for-of-in-javascript-650952654e97
- Use `in` if it's an object, use `of` if it's an array
