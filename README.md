# learn-react
## how to run react 
1. first way to include react in a project (easiest way) is by [CDN](https://reactjs.org/docs/cdn-links.html) copy the script tags and paste it inside the head tag

    then you have to enable writing [JSX](https://reactjs.org/docs/add-react-to-a-website.html#quickly-try-jsx) in your react project by copy the script tag and paste it inside head tag also. 
    > Now you can use JSX in any `<script>` tag by adding type="text/babel" attribute to it. 

    this note is important:
    ```
    <script src="script.js" type="text/babel">
    ```
2. by run it as react project
```
npx create-react-app my-app
cd my-app
npm start
```
or u can do the following
1. create a local directory 
2. link it with GitHub repos(optional)
3. type in terminal: 
```
npx create-react-app .
npm start
```
## why react
1. enable u to create a composable code. which means rather than create a long code u divide it into small pieces of code then gather them together to do the same thing that long code did.
2. it is declarative. (tell me what should I do, and I'll worry about how I get it done).
3. it is a hirable skill
4. it is actively maintained by skilled people.

### first lesson notes:
so in react we type JavaScript lines included with html tags and then it's render in the browser!!!

- html inside JS??: no it is not html it is JSX.
- `ReactDOM.render(<p>first lesson</p>, document.getElementById("root"))` this line is the first gate to render the sites. its like append a JSX to the selected container.
    - ReactDOM: is a react class (build-in component from react Dom library) 
    - render(): build in method like print in the browser screen and it has 2 parameters
        - first one is the JSX tags
        - second one is the container id that will hold the JSX tags.

### second lesson notes:
- if u console an element that created by normal DOM it will print (for example)
```
const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1) // <h1 class="header">
```
- but react JSX will print (for example)
```
const element = <h1 className="header">This is JSX</h1>
console.log(element)
/* 
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {className: "header", children: "This is JSX"}, 
    _owner: null, 
    _store: {}
}
*/
```
- in JSX we have to make sure we return just one element, if we need to return multiple elements just include them inside one div tag or any parent tag.
- if u want to make the JSX inside a variable:
```
const page = (
    <div>
        <h1> something1 </h1>
        <p> something2 </p>
        <h3> something3 </h3>
    </div>
)
```

### third lesson notes:
- instead of using a variable to store the component, the best practice is to use the functions (a function for each component) with pascalCase (by make the first letter an upper case, for ex: TemplateForDesign) rather than camelCase (just make the first letter for each word except for the first one an upper case, for ex: templateForDesign)