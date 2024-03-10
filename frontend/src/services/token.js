function getTokenFromSessionStorage() {
    const sessionData = sessionStorage.getItem('persist:root');
    if (sessionData) {
        try {
            const parsedSessionData = JSON.parse(sessionData);
            const authData = JSON.parse(parsedSessionData.auth);
            return authData.token;
        } catch (error) {
            console.error('Error parsing session data:', error);
            return null;
        }
    } else {
        console.error('Session storage data not found');
        return null;
    }
}

export default getTokenFromSessionStorage;