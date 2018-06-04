console.log(React);
console.log(ReactDOM);
const r = React.createElement;

function DemoComponent (props){
    console.log(props);
    return r(
        'form',
        {style: {background: '#fafffa', color: 'white'}},
        r(
            'label',
            {},
            r(
                'input',
                {type: 'text', placeholder: 'login'}

            ),
            r(
                'input',
                {type: 'password', placeholder: 'pass'}
            )
        ),
        
    )
}

ReactDOM.render(
    React.createElement(
        DemoComponent,
        {name:"vasia"}
    ),
    document.querySelector('#content')
)