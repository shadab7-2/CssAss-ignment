const AuthService = {
  login: (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'password') {
          resolve({ username, role: 'admin' });
        } else if (username === 'student' && password === 'password') {
          resolve({ username, role: 'student' });
        } else {
          reject(new Error('Invalid username or password'));
        }
      }, 1000);
    });
  },
  logout: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  },
};

export default AuthService;
