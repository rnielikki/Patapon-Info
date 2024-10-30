# cmd_inxJmp

Retrieves the address from address parameters (or *table*) by given index, and jump to the address.

Used in e.g. hideout facility selection.

## Code Information

- **Name**: `cmd_inxJmp`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 2f 00`
- **Assembly Address in Memory** : `0x883a44c`

## Parameters

- `(int)index` *(8 bytes)*
- `(Address...)address` *(4 bytes)*

`...` is multiple parameters. In here, it is jump *tables*.

## Example

Here is one example in hex:

```25 00 2f 00 / 04 00 00 00 / 40 00 00 00 
c8 b2 05 00 / 98 0c 04 00 / 70 2d 04 00 / 70 2d 04 00 / 70 2d 04 00 /a8 d6 05 00 /58 a4 05 00 / 28 d6 05 00
70 2d 04 00 /94 ce 05 00 /bc d5 05 00 /70 2d 04 00 / 70 2d 04 00 ``` 

Which is interpreted as:

```c
cmd_inxJmp((int *)iVar40,
   0x5b2c8, 0x40c98, 0x42d70, 0x42d70, 0x42d70, 0x5d6a8, 0x5a458, 0x5d628, 0x42d70, 0x5ce94, 0x5d5bc, 0x42d70, 0x42d70)
```

if `iVar40` is `0`, it jumps to `0x5b2c8`, and if the `iVar40` is  `6`, it goes to `0x5a458` and so on.

## Remarks

This can be considered as having only one parameter and having jump table as next values.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883a44c(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  PAC::Cmd_Jump_Or_Call(param_2,*piVar1 << 2,1);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,0,4);
  PAC::Cmd_Jump_Or_Call(param_2,*puVar2,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

