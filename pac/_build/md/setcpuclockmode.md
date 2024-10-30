# setCpuClockMode

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setCpuClockMode`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 0e 00`
- **Assembly Address in Memory** : `0x8949138`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 09 0e 00 / 02 00 00 00 / ff ff ff ff```

Which is interpreted as:

```c
setCpuClockMode((int)-1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08949138(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar3 = *puVar1;
  iVar2 = zero_if_08aabe38_is_zero(1);
  FUN_088730e8(iVar2 + 0x1d50,uVar3);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

