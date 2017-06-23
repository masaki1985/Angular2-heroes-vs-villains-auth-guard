import { ZeroPaddingPipe } from './zero-padding.pipe';

describe('ZeroPaddingPipe', () => {
  it('create an instance', () => {
    const pipe = new ZeroPaddingPipe();
    expect(pipe).toBeTruthy();
  });

  it('should padding correctly', () => {
    const pipe = new ZeroPaddingPipe();
    expect(pipe.transform(1, 2)).toBe('01');
    expect(pipe.transform(1, 0)).toBe(1);
    expect(pipe.transform(10, 2)).toBe('10');
    expect(pipe.transform(10, 3)).toBe('010');
  });

  it('should ignore if not a number', () => {
    const pipe = new ZeroPaddingPipe();
    expect(pipe.transform('1', 2)).not.toBe('01');
    expect(pipe.transform('1', 2)).toBe('1');
    expect(pipe.transform('', 2)).toBe('');
    expect(pipe.transform(null, 2)).toBe(null);
    expect(pipe.transform(undefined, 0)).toBe(undefined);
    expect(pipe.transform('string', 2)).toBe('string');
  });
});
