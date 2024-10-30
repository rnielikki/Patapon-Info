# clearTipsSelectMask

Clears tip status before loading all available tips. Used by `labo.pac`.

This *does not* remove tip unlock status.

## Code Information

- **Name**: `clearTipsSelectMask`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 2c 00`
- **Assembly Address in Memory** : `0x894bd18`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 0a 2c 00```

Which is interpreted as:

```c
clearTipsSelectMask()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894bd18(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = Save::Get_Save_BaseAddr(1);
  Syscall::Kernel::Kernel_Memset(*(int *)(iVar1 + 0x58) + 0x14,0,0x10);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

