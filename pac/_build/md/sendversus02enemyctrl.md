# sendVersus02EnemyCtrl

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `sendVersus02EnemyCtrl`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 cb 00`
- **Assembly Address in Memory** : `0x8924804`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 cb 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 0c 00 00 00 / 20 00 00 00 / 0a 00 00 00 / 20 00 00 00 / 0b 00 00 00```

Which is interpreted as:

```c
sendVersus02EnemyCtrl((int)0, (int *)iVar12, (float *)fVar10, (float *)fVar11)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924804(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  undefined local_18;
  undefined local_17;
  undefined2 local_16;
  undefined2 local_14;
  undefined2 local_12;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  local_18 = 0x18;
  local_12 = 0x1005;
  local_17 = 0;
  local_16 = 0;
  local_14 = 0;
  if (iVar5 != 0) {
    local_4 = *puVar4;
    local_8 = *puVar3;
    local_c = *puVar2;
    local_10 = *puVar1;
    FUN_089cda44(*(undefined4 *)(iVar5 + 0x48),&local_18);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

