console.log(React);
console.log(ReactDOM);
function DemoComponent (){
    return React.createElement(
        'div',
        {style: {background: '#123456', color: 'white'}},
        'hello world'
    )
}

ReactDOM.render(
    React.createElement(DemoComponent),
    document.querySelector('#content')
)