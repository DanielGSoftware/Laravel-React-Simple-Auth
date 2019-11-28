import axios from 'axios';

export const logout = function logout() {
    axios.post('/api/logout', {},
        {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('api_token'))}`
            }
        }).then(() => {
            localStorage.removeItem('api_token');
            this.props.history.push("/");
        }
    )
};
