# getAppearMissileType

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getAppearMissileType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 38 01`
- **Assembly Address in Memory** : `0x892abcc`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 38 01 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 0d 00 00 00```

Which is interpreted as:

```c
getAppearMissileType((int *)iVar0, (int *)iVar13)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892abcc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 uVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0xffffffff;
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar3 != 0)) &&
     (iVar3 = func_0x08b2acc0(*(undefined4 *)(*(int *)(iVar3 + 0x2c) + 0x54),*puVar1), iVar3 != 0))
  {
    uVar4 = FUN_08a4e6b4(iVar3);
    *puVar2 = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

