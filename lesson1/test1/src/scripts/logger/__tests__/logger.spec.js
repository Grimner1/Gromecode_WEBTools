import { createLogger } from '../logger';

it('в этой проверке должен вернуть пустой массив логов', () => {
  const logger = createLogger('user login');
  expect(logger.getLogs()).toEqual([]);
});

it('тут должен вернуться лог с меседжом', () => {
  const logger = createLogger('user loggin');
  logger.log('login success');

  expect(logger.getLogs()).toEqual(['log - user loggin - login success']);
});

it('тут должна вернуться ошибка с мессенджом', () => {
  const logger = createLogger('user loggin');
  logger.error('login failed');

  expect(logger.getLogs()).toEqual(['error - user loggin - login failed']);
});
