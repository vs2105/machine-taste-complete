import { UserArrayPipe } from './user-array.pipe';

describe('UserArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new UserArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
