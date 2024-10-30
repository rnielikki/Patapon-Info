# setAppearMissileInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setAppearMissileInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 37 01`
- **Assembly Address in Memory** : `0x892aad0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 37 01 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 96 43 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setAppearMissileInfo((int)0, (int)0, (float)300, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892aad0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar5 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar5 != 0)) &&
     (iVar5 = func_0x08b2acc0(*(undefined4 *)(*(int *)(iVar5 + 0x2c) + 0x54),*puVar1), iVar5 != 0))
  {
    FUN_08a4e814(*puVar3,iVar5,*puVar2,*puVar4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

