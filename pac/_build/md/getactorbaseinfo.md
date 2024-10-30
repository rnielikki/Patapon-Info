# getActorBaseInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getActorBaseInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 03 00`
- **Assembly Address in Memory** : `0x8910d9c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(uint)Var4` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 03 00 / 04 00 00 00 / 41 00 00 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getActorBaseInfo((int *)iVar65, (int *)iVar0, (int *)iVar0, (int *)iVar1, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08910d9c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  uint *puVar5;
  int iVar6;
  undefined4 uVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (uint *)Pac_Get_Param(param_2,4,1,4);
  iVar6 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar6 == 0) {
    iVar6 = 0;
  }
  if (iVar6 != 0) {
    *puVar2 = (uint)*(byte *)(iVar6 + 0x8a);
    *puVar3 = *(undefined4 *)(iVar6 + 0x74);
    uVar7 = (**(code **)(*(int *)(iVar6 + 4) + 0x34))(iVar6);
    *puVar4 = uVar7;
    *puVar5 = (uint)*(byte *)(iVar6 + 0x9c);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

