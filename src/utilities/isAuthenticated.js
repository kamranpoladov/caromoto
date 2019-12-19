import cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export default (tokenIssueTime) => {
    const token = cookies.get('Access token');
    if (token) {
        const decoded = jwtDecode(token);
        const validTime = decoded.exp - decoded.nbf;
        if (tokenIssueTime + validTime > Date.now()) {
            return true;
        }
    }
    return false;
};