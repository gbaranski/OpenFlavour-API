import tokens from './private/tokens';

export function authenticate(tokenToCheck: string) {
  return tokens.includes(tokenToCheck);
}
