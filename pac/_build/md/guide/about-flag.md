# What is Flag in PACs?

Flag is bit array of 0 or 1 values. In easier words, it is just bunch of `true`(1) or `false`(0).

The flag value is assigned with PAC instruction.

Those are useful when check if the instruction has reached to certain line, and control the flow based on it.

Even though you can use total `0x2000` bit (`0x400` as byte) in theory,<br>
in actual code seems like `0xC00` ~ `0xF00` range is commonly used (there are some exceptions like `0x3xx`)

## Example

For example, if you set a flag to `1` with [cmd_flgSet](../cmd_flgset.md) in `0xEE0`,<br>
you can give that `0xEE0` to the parameter of e.g. [cmd_flgAnd](../cmd_flgand.md) to check, and it will be considered as `1` in the flag calculation.

So if you do like this:

```
cmd_flgset(0xEE0)
...
cmd_and(0x1234, 0xEE0)
```
This will jump to `0x1234`.

## What happens if I don't assign it?

The unassigned flag is always zero. So do not worry of the garbage data!

## Note

Be careful and **do not edit assigned flag**! Always check before assigning the new flag.


(Thank you for Nemoumbra to help understanding the flag)