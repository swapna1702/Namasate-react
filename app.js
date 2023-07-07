const heading = React.createElement(
    "h1",
    {id:"heading"},
    "hello world from react1???....");

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",
            {id:"heading"},
            "hello world from react parent...."))

    )
    const root= ReactDOM.createRoot(document.getElementById("root"));
    //const root= ReactDOM.createRoot(document.getElementById("root"));
  
    root.render(parent);
        //root1.render(heading);
        //root.render(parent);