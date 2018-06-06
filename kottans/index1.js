const r = React.createElement;
class DemoComponent extends React.Component {
    constructor(...args){
        super(...args);
        this.state = {
            login: "hedgehog",
            password: 'wewe',
            showPassword: false
        };
        this.updateLogin = this.updateLogin.bind(this);
        this.setShowPassword = e => this.setState({showPassword: e.target.checked});
        this.updatePass = this.updateLogin.bind(this);
    }
    updateLogin(event){
        this.setState({login: event.target.value});        
    }
    updatePass(event){
        this.setState({password: event.target.value});
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
                    {type: this.state.showPassword? 'text':'password', 
                    placeholder: 'pass',
                    value: this.state.pasword,
                    onChange: this.updatePass}
                ),
                r(
                    'label',
                    {},
                    r(
                        'input',
                        {type: 'checkbox', onChange: this.setShowPassword}
                    ),
                    'Show password'
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