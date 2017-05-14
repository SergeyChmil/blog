import { MakeShortTextPipe } from './make-short-text.pipe';

describe('MakeShortTextPipe', () => {
  it('create an instance', () => {
    const pipe = new MakeShortTextPipe();
    expect(pipe).toBeTruthy();
  });
});
