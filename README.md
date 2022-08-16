# learn-react
first way to include react in a project (easiest way) is by [CDN](https://reactjs.org/docs/cdn-links.html) copy the script tags and paste it inside the head tag

then you have to enable writing [JSX](https://reactjs.org/docs/add-react-to-a-website.html#quickly-try-jsx) in your react project by copy the script tag and paste it inside head tag also. 
> Now you can use JSX in any `<script>` tag by adding type="text/babel" attribute to it. 

this note is important:
```
<script src="script.js" type="text/babel">
```

## first lesson notes
so in react we type javascript lines included with html tags and then it's render in the browser!!!

- html inside js??: no it is not html it is JSX.
- `ReactDOM.render(<p>first lesson</p>, document.getElementById("root"))` this line is the first gate to render the sites. its like append a JSX to the selected container.
    - ReactDOM: is a react class (build-in component from react dom library) 
    - render(): build in method like print in the browesr screen and it has 2 parameters
        - first one is the JSX tags
        - second one is the container id that will hold the JSX tags.