import { OrderbyPipe } from './orderby.pipe';

describe('OrderbyPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderbyPipe();
    expect(pipe).toBeTruthy();
  });
  it('check sorting', () => {
    const pipe = new OrderbyPipe();
    const data = [{ name: 'b'}, { name: 'a'}];
    const result = pipe.transform(data, 'name');
    expect(result[0]).toEqual({ name: 'a'});
    expect(result[1]).toEqual({ name: 'b'});
  });
});
