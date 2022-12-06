// ? isn't shorthand for string | undefined. It's an optional parameter. Meaning - you can either pass the expected value type, or not.

// string | undefined, by contrast, means you must explicitly pass a value that is either a string or undefined. The value may be undefined, but the parameter still exists.

// It would be paradoxical to pass a property after an optional property - you wouldn't be able to set it, since setting it would mean setting one before it, which means its predecessor is then not optional!

export class userData {
  constructor(
    public username: string,
    public password: string,
    public id?: number
  ) {}
}
