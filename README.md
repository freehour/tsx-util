# TSX Util

Utility functions for working with html in typescript and tsx.

### cn

Builds a `className` string from a list of (conditional) class names.

```tsx
function cn(...classNames: (string | false | undefined)[]): string;

// Example
<button className={cn('my-button', animated && 'animated', props.className)} />;
```

### ifTrue

Converts an (optional) boolean to `true` or `undefined`. Can be used to set an attribute conditionally.

```tsx
function ifTrue(value: boolean | undefined): true | undefined;

// Example
<input data-disabled={ifTrue(disabled)} />;
```

### ifFalse

Returns `true` if the value is `false`, otherwise `undefined`. Can be used to set an attribute conditionally.

```tsx
function ifFalse(value: boolean | undefined): true | undefined;

// Example
<input data-valid={ifFalse(invalid)} />;
```
