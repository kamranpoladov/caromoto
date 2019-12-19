import cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import cookieNames from './cookieNames';

// Tracking token expiration based on user time settings
export default (tokenIssueTime) => {
    const token = cookies.get(cookieNames.access);
    if (token) {
        const decoded = jwtDecode(token);
        const validTime = decoded.exp - decoded.nbf;
        if (tokenIssueTime + validTime > Date.now() && decoded.nbf < Date.now()) {
            return true;
        }
    }
    return false;
};