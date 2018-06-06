const r = React.createElement;
class DemoComponent extends React.Component {
    constructor(...args){
        super(...args);
        this.state = {
            login: "hedgehog"
        };
        this.updateLogin = this.updateLogin.bind(this);
    }
    updateLogin(event){
        this.setState({login: event.target.value});
        
    }
    render(){
        //this.props
        //this.state
        return r(
            'form',
            {style: {background: '#fafffa', color: 'white'}},
            r(
                'label',
                {},
                r(
                    'input',
                    {type: 'text', placeholder: 'login', value: this.state.login, onChange: this.updateLogin}
    
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