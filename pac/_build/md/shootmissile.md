# shootMissile

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `shootMissile`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 3d 01`
- **Assembly Address in Memory** : `0x892b030`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 3d 01 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 0a 00 00 00```

Which is interpreted as:

```c
shootMissile((int *)iVar0, (int *)iVar10)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892b030(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar3 != 0)) &&
     (iVar3 = func_0x08b2acc0(*(undefined4 *)(*(int *)(iVar3 + 0x2c) + 0x54),*puVar1), iVar3 != 0))
  {
    FUN_08a4e45c(iVar3,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

