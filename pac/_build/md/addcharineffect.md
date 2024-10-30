# addCharinEffect

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `addCharinEffect`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 5a 00`
- **Assembly Address in Memory** : `0x891fbd8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*
- `(undefined4)Var5` *(8 bytes)*
- `(undefined4)Var6` *(8 bytes)*
- `(undefined4)Var7` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 5a 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 04 00 00 00 / 02 00 00 00 / 06 00 00 00 / 10 00 00 00 / 00 00 80 41 / 10 00 00 00 / 00 00 f0 41 / 40 00 00 00 / cf 00 00 00 / 40 00 00 00 / d0 00 00 00```

Which is interpreted as:

```c
addCharinEffect((int)1, (int)1, (int)4, (int)6, (float)16, (float)30, ((global)float *)gfVar207, ((global)float *)gfVar208)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891fbd8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  undefined4 *puVar7;
  undefined4 *puVar8;
  int iVar9;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  puVar7 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  puVar8 = (undefined4 *)Pac_Get_Param(param_2,7,1,4);
  iVar9 = *(int *)(param_1 + 0x10);
  if (iVar9 == 0) {
    iVar9 = 0;
  }
  else {
    if (iVar9 == 0) {
      iVar9 = 0;
    }
    iVar9 = *(int *)(iVar9 + 0x188);
    if (iVar9 == 0) {
      iVar9 = 0;
    }
  }
  if (iVar9 != 0) {
    local_4 = *puVar8;
    local_8 = *puVar7;
    FUN_08952d2c(*puVar5,*puVar6,iVar9,&local_8,*puVar1,*puVar2,*puVar3,*puVar4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

