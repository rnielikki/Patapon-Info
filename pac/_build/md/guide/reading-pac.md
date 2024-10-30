# Reading a PAC file

They are pure binary, so you can open as hex editor and read it.

For disassembled PAC, there is disassembled version of PAC as text somewhere.

## Basics

### Reading order

The bytes are **Little Endian**. This means, you have to cut 4-bytes and read it as reversed order.

For example,

`25 16 2B 00 04 00 00 00 36 00 00 00 02 00 00 00 22 01 00 00 02 00 00 00 00 00 00 00`

Cut to 4 bytes,

`25 16 2B 00 / 04 00 00 00 / 36 00 00 00 / 02 00 00 00 / 22 01 00 00 / 02 00 00 00 / 00 00 00 00`

And reverse each block and they are the value.

`00 2b 16 25 / 00 00 00 04 / 00 00 00 36 / 00 00 00 02 / 00 00 01 22 / 00 00 00 02 / 00 00 00 00`

So the values are

`0x2b1625 / 0x4 / 0x36 / 0x2 / 0x122 / 0x2 / 0x0 `

### local and global

There are two kinds of variables:

- "local" means variable inside one file.
- "global" means variable across multiple PAC files.

**Avoid using global**, unless you want to use the variable for multiple PAC files. If you really have to use it, check carefully if the global variables used in any of other PAC file.

## Immediate and Variable

So, always **check example** first.

## Reading as Hex

You can open hex editor to read PAC instructions. And then, follow this:

1. Slice them into 4 bytes.
2. Slice if next block starts with `25`.
3. Check every block starts with `25`, they are instructions.
4. Slice parameters to 4~8 bytes.
  - starting with `1` `2`, `4`, `8`, `10`, `20`, `40`, `80`, are potentially 8-bye parameters, but DO NOT RELY on this!

You can do it inside you hread, or with help of a hex editor (e.g. ImHex).

Though, the method is rough (especially in 3, or rarely, even parameter value can be `0x25` etc), that is why checking document is important.

### Example

```
25 00 08 00 08 00 00 00 62 00 00 00 10 00 00 00 00 00 20 41 25 00 01 00 25 0A 05 00 02 00 00 00 02 00 00 00 04 00 00 00 01 00 00 00 25 00 17 00 04 00 00 00 01 00 00 00 10 00 00 00 00 00 00 00 54 0E 00 00 25 00 12 00 08 00 00 00 EE 01 00 00 02 00 00 00 F0 FF 00 00 25 00 12 00 04 00 00 00 00 00 00 00 02 00 00 00 0F 00 00 00 25 00 13 00 08 00 00 00 EE 01 00 00 04 00 00 00 00 00 00 00 25 00 01 00
```

First, cut off them as 4 bytes for easier understanding.

```
25 00 08 00 / 08 00 00 00 / 62 00 00 00 / 10 00 00 00 / 00 00 20 41 / 25 00 01 00 / 25 0A 05 00 / 02 00 00 00 / 02 00 00 00 / 04 00 00 00 / 01 00 00 00 / 25 00 17 00 / 04 00 00 00 / 01 00 00 00 / 10 00 00 00 / 00 00 00 00 / 54 0E 00 00 / 25 00 12 00 / 08 00 00 00 / EE 01 00 00 / 02 00 00 00 / F0 FF 00 00 / 25 00 12 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 0F 00 00 00 / 25 00 13 00 / 08 00 00 00 / EE 01 00 00 / 04 00 00 00 / 00 00 00 00 / 25 00 01 00
```

Second, Cut just before 25 XX XX XX.

```
25 00 08 00 / 08 00 00 00 / 62 00 00 00 / 10 00 00 00 / 00 00 20 41
25 00 01 00
25 0A 05 00 / 02 00 00 00 / 02 00 00 00 / 04 00 00 00 / 01 00 00 00
25 00 17 00 / 04 00 00 00 / 01 00 00 00 / 10 00 00 00 / 00 00 00 00 / 54 0E 00 00
25 00 12 00 / 08 00 00 00 / EE 01 00 00 / 02 00 00 00 / F0 FF 00 00 
25 00 12 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 0F 00 00 00
25 00 13 00 / 08 00 00 00 / EE 01 00 00 / 04 00 00 00 / 00 00 00 00
25 00 01 00
```

Third, Check the corresponding instructions.

> **25 00 08 00** / 08 00 00 00 / 62 00 00 00 / 10 00 00 00 / 00 00 20 41 
> `cmd_add((int/float *)target, (int/float)value)`

> **25 00 01 00**
> `cmd_end()`

> **25 0A 05 00** / 02 00 00 00 / 02 00 00 00 / 04 00 00 00 / 01 00 00 00
> `getLaboInfo((int)Var0, (uint)Var1)`

> **25 00 17 00** / 04 00 00 00 / 01 00 00 00 / 10 00 00 00 / 00 00 00 00 / 54 0E 00 00
> `cmd_ifEQ((int/float)value1, (int/float)value2, (Address)address)`

> **25 00 12 00** / 08 00 00 00 / EE 01 00 00 / 02 00 00 00 / F0 FF 00 00 
> `cmd_iand((uint *)target, (uint)value)`

> **25 00 12 00** / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 0F 00 00 00
> `cmd_iand((uint *)target, (uint)value)`

> **25 00 13 00** / 08 00 00 00 / EE 01 00 00 / 04 00 00 00 / 00 00 00 00
> `cmd_ior((uint *)target, (uint)value)`

> **25 00 01 00**
> `cmd_end()`

And then, fill the parameters. (Check [About Parameters](./about-parameters.md) for this)<br>
**Note the value is Little Endian** so you have to read 4 bytes in reverse order.

> **25 00 08 00** / ((08 00 00 00) 62 00 00 00) , ((10 00 00 00)00 00 20 41 )
> `cmd_add((global)int iVar0x62, (float)10.0)`

> **25 00 01 00**
> `cmd_end()`

> **25 0A 05 00** ((02 00 00 00) 02 00 00 00) , ((04 00 00 00)01 00 00 00)
> `getLaboInfo((int)0x2, int iVar0x1)`

> **25 00 17 00** / ((04 00 00 00)01 00 00 00) , ((10 00 00 00)00 00 00 00) , (54 0E 00 00)
> `cmd_ifEQ((int)iVar0x1, (float)0.0, (Address)0xE54)`

> **25 00 12 00** / ((08 00 00 00)EE 01 00 00) , ((02 00 00 00 )F0 FF 00 00) 
> `cmd_iand((global)int gVar0x1EE, (uint)0xFFF0)`

> **25 00 12 00** / ((04 00 00 00)00 00 00 00) , ((02 00 00 00)0F 00 00 00)
> `cmd_iand(int iVar0x0, (uint)0xF)`

> **25 00 13 00** / ((08 00 00 00)EE 01 00 00) , ((04 00 00 00) , 00 00 00 00)
> `cmd_ior((global)uint gVar0x1EE, uint 0x0)`

> **25 00 01 00**
> `cmd_end()`


This could be hard for first time, but if you do this enough, you will get gut to read them.
