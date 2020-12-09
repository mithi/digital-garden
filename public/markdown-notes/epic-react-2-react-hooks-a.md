# React Hooks
hooks are special functions that you can call inside a functional component to store data (like state) or perform actions (side effects).
You can make your own hooks.

## Exercise 1

Examples of hooks
- use state - returns a pair value
- use effect - doesn't return anything
- use context - returns a value
- use ref - returns a value
- use reducer - return a pair of value 
- use callback 
- use memo 

## Exercise 2

UseEffect is a hook that can run after your component renders or re-renders

Lifecyles
- mount
  - run lazy initializers 
  - render
  - react updates the dom
  - run layout effects
  - browser paints the screen
  - run effects
- update
  - render 
  - react updates the dom 
  - clean up layout effects 
  - run layout effects 
  - browser paints the screen
  - clean up effects
  - run effects
- unmount
  - clean up layout effects
  - clean up effects

### Local Storage

Get initial state from LOCAL STORAGE (read more about this) if available
and keep local storage updated when name is updated 

Please look at local storage in the chrome dev tools
we use local storage so that the browser remembers the state
even if we refresh the page or close the tab and load the url again

```js

function Greeting({initialName = ''}) {

  const initialState = window.localStorage.getItem('name') || initialName
  const [name, setName] = React.useState(initialState)

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  })

  // ... the rest of the function here (onChange handler and render)
}

```

### Lazy initialization

In the first exercise, every time the component function is run, the function
reads from local storage which can be an expensive computation, so we shouldn't do this.
We just need to read this the first time the component renders, we don't have to read it
at the subsequent rerenders.

The useState hook allows you to pass a function instead of an actual value, and
it will only call that function when the component is rendered for the first time. 

```js
// eager version
React.useState(someExpensiveComputation()) 

// lazy version
React.useState(() => someExpensiveComputation())

// eager version
const [name, setName] = React.useState(
  window.localStorage.getItem('name') || initialName,
)

// lazy version
const [name, setName] = React.useState(
  () => window.localStorage.getItem('name') || initialName,
)
```

### UseEffect should only be called when needed

```js

// use effect is called at every rerender which is not necessary
// the first argument is the function to be called
React.useEffect(() => {
  window.localStorage.setItem('name', name)
})
 
 // use effect is called only when the name is changed
 // we pass in the 2nd argument an array
 // the effect callback function is only called
 // when one of the elements of the array changes
React.useEffect(() => {
  window.localStorage.setItem('name', name)
}, [name])

```

### Custom hook

```js
function useLocalStorageState(key, defaultValue = '') {

  // this is only called at the first time this function is called 
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue,
  )

  // when the state or passed key changes, this effect is called
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

function Greeting() {
  // we call our custom hook here
  const [name, setName] = useLocalStorageState('name')
  
  // when we type, this is called, 
  // the state in useLocalStorageState changes
  // so the use effect is triggered
  // and we get to update the item in the local storage
  function handleChange(event) {
    setName(event.target.value)
  }

  //.. the rest of the code here
}
```

### Flexible Custom Hook

We can make reusable hooks

```js
function initialLocalStorageState(key, defaultValue, deserialize) {
    const storedValue = window.localStorage.getItem(key)

    if (storedValue) {
        try {
            return deserialize(storedValue)
        } catch (error) {
            window.localStorage.removeItem(key)
        }
    }

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
}

function updateLocalStorageState(storedKeyRef, key, state, serialize) {
    const storedKey = storedKeyRef.current

    if (storedKey !== key) {
        window.localStorage.removeItem(storedKey)
    }

    storedKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
}

function useLocalStorageState(
    key,
    defaultValue = '',
    {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) {
    const [state, setState] = React.useState(() =>
        initialLocalStorageState(key, defaultValue, deserialize),
    )

    const storedKeyRef = React.useRef(key)

    React.useEffect(
        () => updateLocalStorageState(storedKeyRef, key, state, serialize),
        [key, state, serialize],
    )

    return [state, setState]
}
```
