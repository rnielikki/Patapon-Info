# nextAppearMissile

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `nextAppearMissile`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 39 01`
- **Assembly Address in Memory** : `0x892ac88`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 39 01 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
nextAppearMissile((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892ac88(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar2 != 0)) &&
     (iVar2 = func_0x08b2acc0(*(undefined4 *)(*(int *)(iVar2 + 0x2c) + 0x54),*puVar1), iVar2 != 0))
  {
    FUN_08a4e80c(iVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

