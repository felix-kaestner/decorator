<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@felix-kaestner/decorator](./decorator.md) &gt; [final](./decorator.final.md)

## final() function

Function to make the provided constructor sealed and immutable

**Signature:**

```typescript
export declare function final(constructor: Function): void;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

constructor


</td><td>

Function


</td><td>

class definition to make immutable


</td></tr>
</tbody></table>
**Returns:**

void

## Remarks

This method is ment to be used as decorator. When this function is executed, it will seal both the constructor and its prototype which would not allow the class to be sub-classed at runtime, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable. Additionally, if this function is executed, it will freeze both the constructor and its prototype meaning that the object can no longer be changed. Freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.

## Example


```typescript
\@final
class BugReport {
  title: string;

  constructor(t: string) {
    this.title = t
  }
}
```

