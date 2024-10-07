import { securityConfig } from '../app/security/securityConfig';

export const environment = {
  production: true,
  strategyLogin: 'strategy1',
  strategyRegister: 'strategy1',
  strategyProfile: 'strategy1',
  strategyForgotPassword: 'strategy1',
  strategyResetPassword: 'strategy1',
  security: securityConfig
};
