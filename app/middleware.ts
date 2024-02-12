// middleware.ts
import { Middleware } from 'redux';
import { REGISTER_USER_SUCCESS, openHomePage } from '@/store/actioins';

const registrationMiddleware: Middleware = (store) => (next) => (action) => {
  const typedAction = action as { type: string }; // Define your action type here

  if (typedAction.type === REGISTER_USER_SUCCESS) {
    // Simulate asynchronous operation
    setTimeout(() => {
      store.dispatch(openHomePage());
    }, 1000); // Delay for 1 second
  }
  return next(action);
};

export default registrationMiddleware;
