# multiPauseTime

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `multiPauseTime`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 16 00`
- **Assembly Address in Memory** : `0x891a1b0`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 16 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
multiPauseTime((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891a1b0(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar2 != 0)) &&
      (iVar2 = *(int *)(iVar2 + 0x2c), iVar2 != 0)) && (iVar2 = *(int *)(iVar2 + 0x58), iVar2 != 0))
  {
    *(bool *)(iVar2 + 0x410) = *piVar1 != 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

