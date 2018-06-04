const r = React.createElement;
class DemoComponent extends React.Component {
    constructor(...args){
        super(...args);
        this.state = {

        };
    }
    render(){
        return r(
            'form',
            {style: {background: '#fafffa', color: 'white'}},
            r(
                'label',
                {},
                r(
                    'input',
                    {type: 'text', placeholder: 'login', value: "vasia"}
    
                ),
                r(
                    'input',
                    {type: 'password', placeholder: 'pass'}
                )
            ),
            
        )
    }
}

ReactDOM.render(
    React.createElement(
        DemoComponent,
        {name:"vasia"}
    ),
    document.querySelector('#content')
)