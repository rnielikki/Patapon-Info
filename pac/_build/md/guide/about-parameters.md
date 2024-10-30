# PAC Parameters

> This requires background knowledge from [Reading PAC#Basics](./reading-pac.md).

PAC Parameters, followed right after the instruction ID, are 4~8 bytes. As 8 bytes, first one is data type.

`25 00 17 00 / 04 00 00 00 / 01 00 00 00 / 10 00 00 00 / 00 00 00 00 / 54 0E 00 00`

First `25 00 17 00` is the instruction ID.

Then, `04 00 00 00` **here** is type, and the following `01 00 00 00` here is the value (in this context it is local int parameter ID).

But at last part, `54 0E 00 00` (`0xE54`), is 4-bytes parameter, because it is address.

Sometimes, for flexible amount of parameters with same type doesn't repeat the type (best seen in e.g. [cmd_flgAND](../cmd_flgand.md)).

So, how do you know if it is 4 bytes or 8 bytes? That's why you have to check the document.

**If you see certain defined type like `Int`, `Float`, `Int/Float` in docs, it should be 8 bytes, if you see `Address` in docs, it should be 4 bytes.**

**Beware of `...` types in docs, they are multiple parameters, and the type is defined only once.**

## Parameter types

### Type reference table

"Immediate" means it is not variable, but a fixed value.

|Type ID|As HEX|Var/Imm|Type|Scope|
|---|---|---|---|---|
|`0x0`|`00 00 00 00`||*none*||
|`0x1`|`01 00 00 00`||`index`||
|`0x2`|`02 00 00 00`|Immediate|`int`||
|`0x4`|`04 00 00 00`|Variable|`int`|local|
|`0x8`|`08 00 00 00`|Variable|`int`|global|
|`0x10`|`10 00 00 00`|Immediate|`float`||
|`0x20`|`20 00 00 00`|Variable|`float`|local|
|`0x40`|`40 00 00 00`|Variable|`float`|global|

### Example
#### Example 1. Variable

`25 10 06 00 / 04 00 00 00 / 10 00 00 00`

This is [getPack (25100600)](../getpack_25100600.md), which takes 1 parameter.

So, the 8-bytes of `04 00 00 00 / 10 00 00 00` is the parameter.

Based on the reference table, the `04 00 00 00` (`0x4`) means *local int variable*.

And since this is **variable**, the next value is `0x10` can be considered as integer variable name.

So it can be represented as `iVar16` (or `iVar0x10`).
#### Example 2. Address

`25 00 03 00 / E8 B4 00 00`

This is [cmd_call](../cmd_call.md), which takes 1 parameter as address.

For the address value, you don't need to find it from the table.

#### Example 3. Data Type

`25 00 17 00 / 08 00 00 00 / 17 00 00 00 / 10 00 00 00 / 00 00 80 3F / 30 18 01 00`

This is [cmd_ifEQ](../cmd_ifeq.md), which takes two 8-bytes types, and one 4-bytes type as address as last part.

`25 00 17 00 // 08 00 00 00 / 17 00 00 00 // 10 00 00 00 / 00 00 80 3F // 30 18 01 00`

- For first one, `08 00 00 00` (`0x8`) is global int variable
- For second one, `10 00 00 00` (`0x10`) is float immediate
- For third one, it is 4-bytes type address, so doesn't need to look up from the table.

#### Example 4. Advanced: Simplifying Duplicated Types

```25 00 2c 00 / 6C 24 01 00 / 02 00 00 00 / 69 0E 00 00 / 6A 0E 00 00```

This is an example from [cmd_flgAND](../cmd_flgand.md).

In the docs, there is *flexible amount of* variable(`(uint...)Var1`), as seen in `...`.

So, takes first parameter as address, and second one as the variable, it will look like this:

```25 00 2c 00 // 6C 24 01 00 // 02 00 00 00 / 69 0E 00 00 / 6A 0E 00 00```

Now, **ONLY the first `02 00 00 00`** here defines the type.

- For first one, it is 4-bytes type address, so doesn't need to look up from the table.
- For second one, `02 00 00 00` (`0x2`) is int immediate

So it is interpreted as `cmd_flgAND(0x1246C, (int)0xE69, (int)0xE6A)`.
