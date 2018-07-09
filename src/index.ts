import {BackEndApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {BackEndApplication};

export async function main(options?: ApplicationConfig) {
  const app = new BackEndApplication(options);
  await app.boot();
  await app.start();
  return app;
}
