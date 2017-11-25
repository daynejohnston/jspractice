import { UniqueCharactersPipe } from './unique-characters.pipe';

describe('UniqueCharactersPipe', () => {
  it('create an instance', () => {
    const pipe = new UniqueCharactersPipe();
    expect(pipe).toBeTruthy();
  });
});
