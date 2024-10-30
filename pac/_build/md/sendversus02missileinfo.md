# sendVersus02MissileInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `sendVersus02MissileInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 c9 00`
- **Assembly Address in Memory** : `0x8924544`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 c9 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00 / 20 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00 / 04 00 00 00 / 03 00 00 00```

Which is interpreted as:

```c
sendVersus02MissileInfo((int *)iVar0, (int *)iVar1, (float *)fVar1, (int *)iVar2, (int *)iVar3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924544(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int iVar6;
  undefined local_14;
  undefined local_13;
  undefined2 local_12;
  undefined2 local_10;
  undefined2 local_e;
  undefined local_c;
  undefined local_b;
  undefined2 local_a;
  undefined4 local_8;
  undefined local_4;
  undefined local_3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  iVar6 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  local_14 = 0x14;
  local_e = 0x1006;
  local_13 = 0;
  local_12 = 0;
  local_10 = 0;
  local_c = 0xff;
  local_b = 0;
  local_a = 0;
  local_8 = 0;
  local_4 = 0xff;
  local_3 = 0xff;
  if (iVar6 != 0) {
    local_8 = *puVar3;
    local_c = (undefined)*puVar1;
    local_b = 1;
    local_a = (undefined2)*puVar2;
    local_4 = (undefined)*puVar4;
    local_3 = (undefined)*puVar5;
    FUN_089cda78(*(undefined4 *)(iVar6 + 0x48),&local_14);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

