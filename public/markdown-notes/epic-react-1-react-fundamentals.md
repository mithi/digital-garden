# React Fundamentals

- [Kent C Dodd's Deployed on Netlify](https://react-fundamentals.netlify.app/)
- [JavaScript to Know for React](https://kentcdodds.com/blog/javascript-to-know-for-react)
- Review the spread syntax and how you can use it to override previously defined
  properties of an object

## Contents

- [Exercise 1: Basic Javascript Rendered Hello World](#exercise-1-hello-world)
- [Exercise 2: Intro to Raw React API](#exercise-2-raw-react-api)
- [Exercise 3: Using JSX](#exercise-3-jsx)
- [Exercise 4: Create Custom Components](#exercise-4-custom-components-and-proptypes)
- [Exercise 5: Styling](#exercise-5-styling)
- [Exercise 6: Forms](#exercise-6-forms)
- [Exercise 7: Rendering Arrays](#exercise-7-rendering-arrays)

## Exercise 1: Hello World

Write a script that will put a `div` with a `class` named `container` inside an
existing `div` with an `id` of `root`. This div should have the text
`hello world` inside it.

```html
<script type="module">
  const rootElement = document.getElementById('root')
  const element = document.createElement('div')
  element.textContent = 'hello world'
  element.className = 'container'
  rootElement.append(element)
</script>
```

If the `div` with and `id` called `root` does not exist yet, you must create it
first ie

```html
<script type="module">
  const rootElement = document.createElement('div')
  document.body.append(rootElement)
  const element = document.createElement('div')
  element.textContent = 'Hello World'
  element.className = 'container'
  rootElement.append(element)
</script>

// ↓ ↓ ↓ ↓ produces ↓ ↓ ↓ ↓

<div id="root">
  <div class="container">Hello World</div>
</div>
```

## Exercise 2: Raw React API

Read
[UI.dev Imperative Vs Declarative Programming](https://ui.dev/imperative-vs-declarative-programming/)

Javascript files to write react applications for the web:

1. `React` for creating React elements (like `document.createElement()`)
2. `ReactDom` for rendering elements to the DOM, document object model (like
   `rootElement.append()`)

Example of using react and react dom to create elements and render that element
in the dom.

```html
<script>
  const elementProps = {id: 'element-id', children: 'Hello world!'}
  const elementType = 'h1'
  const reactElement = React.createElement(elementType, elementProps)
  ReactDOM.render(reactElement, rootElement)
</script>

// ↓ ↓ ↓ ↓ compiles to ↓ ↓ ↓ ↓

<div id="root">
  <h1 id="element-id">Hello World</h1>
</div>
```

The following

```html
<script type="module">
  const rootElement = document.getElementById('root')
  const element = React.createElement('div', {
    className: 'container',
    children: 'Hello World',
  })
  ReactDOM.render(element, rootElement)
</script>

// ↓ ↓ ↓ ↓ compiles to ↓ ↓ ↓ ↓

<div id="root">
  <div class="container">Hello World</div>
</div>
```

To produce

```html
<div id="root">
  <div class="container">
    <span>Hello</span>
    <span>World</span>
  </div>
</div>
```

You can do

```js
const helloElement = React.createElement('span', null, 'Hello')
const worldElement = React.createElement('span', null, 'World')
const rootElement = document.getElementById('root')
const element = React.createElement('div', {
  className: 'container',
  children: [helloElement, ' ', worldElement],
})
ReactDOM.render(element, rootElement)
```

- The second argument of `React.createElement` is an object or `null`.
- It is null if it doesn't have any other properties
- This object has properties as its keys like `className` and `children`.
- The `children` property can be one element or an array of elements.
- An element of `children` can be another react element or something you can
  directly displayed in the dom like a string or number.
- You don't have to pass `children` as part of the object you pass in the second
  argument of `React.createElement`, you can pass it on its own in the third
  argument.

## Exercise 3: JSX

```jsx
const ui = <h1 id="greeting">Hey there</h1>

// ↓ ↓ ↓ ↓ compiles to ↓ ↓ ↓ ↓

const ui = React.createElement('h1', {id: 'greeting', children: 'Hey there'})
```

- jsx is converted to javascript using [babel](https://babeljs.io/).
- Try [online babel repl here](https://babeljs.io/repl)

Example #1

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.9.3/babel.js"></script>
  <script type="text/babel">
    const element = <div className="container">Hello World</div>
    ReactDOM.render(element, document.getElementById('root'))
  </script>
</body>
```

Example #2

```js
const children = 'Hello World'
const className = 'container'
const element = <div className={className}>{children}</div>

// is the same as
const props = {children, className}
const element = <div {...props} />
```

Read

- [Official React: Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Official React: JSX in depth](https://reactjs.org/docs/jsx-in-depth.html)
- [Kent C Dodds: What is JSX](https://kentcdodds.com/blog/what-is-jsx)

## Exercise 4: Custom Components and PropTypes

### JSX

if we want to render

```js
<div className="container">
  <div className="message">Hello World</div>
  <div className="message">Goodbye World</div>
</div>
```

You can do something like this but it is NOT recommended

```jsx
function message({children}) {
  return <div className="message">{children}</div>
}

const element = (
  <div className="container">
    {message({children: 'Hello World'})}
    {message({children: 'Goodbye World'})}
  </div>
)
```

The element being created is of type message. Usually we do
`React.createElement(someString)` but the first argument of `createElement` can
also be a function which can return something renderable. The second argument of
`createElement` is the `props`. This `props` which will be passed as the
argument to the function passed in the first argument of `createElement`.

This is why you can also do it like below (but it is NOT recommended)

```jsx
function message({children}) {
  return <div className="message">{children}</div>
}

const element = (
  <div className="container">
    {React.createElement(message, {children: 'Hello World'})}
    {React.createElement(message, {children: 'Goodbye World'})}
  </div>
)
```

Here are a few examples of Babel output for JSX:

```js
ui = <Capitalized /> // React.createElement(Capitalized)
ui = <property.access /> // React.createElement(property.access)
ui = <Property.Access /> // React.createElement(Property.Access)
ui = <Property['Access'] /> // SyntaxError
ui = <lowercase /> // React.createElement('lowercase')
ui = <kebab-case /> // React.createElement('kebab-case')
ui = <Upper-Kebab-Case /> // React.createElement('Upper-Kebab-Case')
ui = <Upper_Snake_Case /> // React.createElement(Upper_Snake_Case)
ui = <lower_snake_case /> // React.createElement('lower_snake_case')
```

This is why we should capitalize the function name so that babel knows that that
the type to be passed to `createElement` is a function and NOT a string.

```jsx
// This is being used as a component 🎉
function Message({children}) {
  return <div className="message">{children}</div>
}

const element = (
  <div className="container">
    <Message>Hello World</Message>
    <Message>Goodbye World</Message>
  </div>
)
```

You should also use the `<React.Fragment>` tag

- [Official React: Fragments](https://reactjs.org/docs/fragments.html) To render
  react components side by side.

### Runtime validation with propTypes

We can use propTypes to catch errors, to make sure we are not using our
components incorrectly. Below is an example of how you can implement it from
scratch

```jsx
  <script type="text/babel">
    const PropTypes = {
      string(props, propName, componentName) {
        if (typeof props[propName] !== 'string') {
          return new Error(
            `Hey, the component ${componentName} needs the prop ${propName} to be a string, but a ${typeof props[
              propName
            ]} was passed`,
          )
        }
      },
    }

    function Message({subject, greeting}) {
      return (
        <div className="message">
          {greeting}, {subject}
        </div>
      )
    }

    Message.propTypes = {
      subject: PropTypes.string,
      greeting: PropTypes.string,
    }

    const element = (
      <div className="container">
        <Message subject="World" greeting="Hello" />
        <Message subject="World" greeting="Goodbye" />
      </div>
    )

    ReactDOM.render(element, document.getElementById('root'))
  </script>
```

You can use the package below so you don't have to implement it on your own

Read
[Official React Docs: Type Checking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

```html
<div id="root"></div>
<script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.9.3/babel.js"></script>
<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
<script type="text/babel">
  function Message({subject, greeting}) {
    return (
      <div className="message">
        {greeting}, {subject}
      </div>
    )
  }
  Message.propTypes = {
    subject: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired,
  }

  const element = (
    <div className="container">
      <Message subject="World" greeting="Hello" />
      <Message subject="World" greeting="Goodbye" />
    </div>
  )

  ReactDOM.render(element, document.getElementById('root'))
</script>
```

## Exercise 5: Styling

```jsx
// option #1
<div style={{marginTop: 20, backgroundColor: 'blue'}} />
// option #2
const myStyles = {marginTop: 20, backgroundColor: 'blue'}
<div style={myStyles} />
// both option #1 and #2 produces this html below
<div style="margin-top: 20px; background-color: blue;"></div>
```

This is an example of how you can make a `Box` component with overridable
default styles

```jsx
function Box({style, size, className = '', ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}
```

## Exercise 6: Forms

- [React Official Docs: React Hooks, UseState](https://reactjs.org/docs/hooks-state.html)
- [React Official Docs: Hooks Reference: UseRef](https://reactjs.org/docs/hooks-reference.html#useref)

Using Refs

- One way to get the value of a dom element is via a `ref` object in React.
- A `ref` stays consistent between renders of your components.
- It has a `current` property which can be updated at any time
- You can pass a `ref` to a react element and react will set the current
  property as that dom node that's rendered so you can access it
- create a ref using `React.useRef()`

Please checkout the comments in the following code. Use the chrome dev tools to
make checkout the properties of the event

```jsx
function UsernameForm({onSubmitUsername}) {
  // an object we can use to refer to a dom node
  const usernameInputRef = React.useRef()

  function handleSubmit(event) {
    // you need to prevent the default behavior, submitting the form
    // will post it to the current url (send it to a server)
    event.preventDefault()
    // check out the chrome dev tools to check out the properties of the event
    console.log(event)
    console.log(event.target)
    // A few ways to get the value of the username:
    // Via their index: event.target.elements[0].value
    // Via the elements object by their name or id attribute:
    // event.target.elements.usernameInputId.value
    onSubmitUsername(event.target.elements.usernameInputId.value)
    // another alternative:
    // via the `inputRef` we created
    // usernameInputRef.current.value
  }

  return (
    <form onSubmit={handleSubmit}>
      {/*
          Clicking the button of type="submit" inside is form
          will trigger the specified onSubmit callback function
        */}
      <div>
        {/* Always add a label and id for accessibility reasons */}
        <label htmlFor="usernameInputId">Username:</label>
        {/*We pass usernameInputRef so we get its properties anytime we want*/}
        <input id="usernameInputId" type="text" ref={usernameInputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
```

We want to validate the input of the user as the user is typing and inform the
user if there are some mistakes.We use the `onChange` callback. Here is an
example of how to inform the user that the input must be all lowercase. This
will be displayed if the user did input a non-lowercase character. It will also
disable the submit button when this happens.

```jsx
function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  function handleChange(event) {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}
```

What is an uncontrolled input?

> browser is maintaining the state of the input by itself and we can be notified
> of changes and “query” for the value from the DOM node.

We can control the input such that the user will be unable to input an invalid
input. Check the code below

```jsx
function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
```

## Exercise 7: Rendering Arrays

A key prop is required when you attempt to render a list of elements

This is okay

```jsx
const ui = (
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
)
```

This is NOT okay. because it doesn't have keys

```jsx
const list = ['One', 'Two', 'Three']

const ui = (
  <ul>
    {list.map(listItem => (
      <li>{listItem}</li>
    ))}
  </ul>
)
```

Do NOT use the element INDEX within the array as the key. The key of each
element must be unique.

Please checkout the discussion

- https://kentcdodds.com/blog/understanding-reacts-key-prop
- https://stackoverflow.com/questions/42801343/what-is-the-significance-of-keys-in-reactjs
- https://react-fundamentals.netlify.app/7
- https://react-fundamentals.netlify.app/isolated/final/07.extra-1.js

---

## END
