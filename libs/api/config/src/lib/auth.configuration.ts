import { Inject } from '@nestjs/common';
import { registerAs } from '@nestjs/config';

export const authConfiguration = registerAs('auth', () => ({
  jwtSecret: process.env.JWT_SECRET || 'superSecret!',
  jwtExpired: process.env.JWT_EXPIRED || '7d',
  salt: Number(process.env.JWT_SALT) || 12,
}));

export const InjectAuthConfig = () => Inject(authConfiguration.KEY);
