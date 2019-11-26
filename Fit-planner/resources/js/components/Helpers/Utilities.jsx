export const onChange = function onChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
};

const token_key = 'api_token';
export const isLogin = () => {
    return !!localStorage.getItem(token_key);
};
