import {sealed, immutable, final} from '../src'

@sealed
class SealedFoo {
  constructor(public bar: string = '') {}
}

@immutable
class ImmutableFoo {
  constructor(public bar: string = '') {}
}

@final
class FinalFoo {
  constructor(public bar: string = '') {}
}

describe('Decorator', () => {
  test('Sealed', () => {
    expect(Object.isSealed(SealedFoo)).toBeTruthy()
  })
  test('Immutable', () => {
    expect(Object.isFrozen(ImmutableFoo)).toBeTruthy()
  })
  test('Final', () => {
    expect(Object.isSealed(FinalFoo)).toBeTruthy()
    expect(Object.isFrozen(FinalFoo)).toBeTruthy()
  })
})
