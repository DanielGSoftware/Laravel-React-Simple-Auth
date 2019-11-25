export const onChange = function onChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
};

export const login = function onLogin(e) {
    e.preventDefault();
    if (!this.state.isLoading) {
        this.setState({
            isLoading: true,
            errors: {}
        });

        axios.post('/api/login', {
                email: this.state.email,
                password: this.state.password,
            }
        ).then(res => {
                this.setState({loginSuccess: true});
                localStorage.setItem('api_token', JSON.stringify(res.data.api_token));
                this.props.history.push("/");

            }
        ).catch(res => {
                console.log(res);
                if (res.response.data.errors) {
                    this.setState({errors: res.response.data.errors})
                } else {
                    this.setState({errors: res.response.data})
                }
            }
        ).finally(() => {
                this.setState({isLoading: false})
            }
        );
    }
};

const token_key = 'api_token';
export const isLogin = () => {
    return !!localStorage.getItem(token_key);
};
