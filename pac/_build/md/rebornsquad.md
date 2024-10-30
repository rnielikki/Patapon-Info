# rebornSquad

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `rebornSquad`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 1a 01`
- **Assembly Address in Memory** : `0x8929eb8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 1a 01 / 04 00 00 00 / 2c 00 00 00 / 10 00 00 00 / 00 00 80 3f / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
rebornSquad((int *)iVar44, (float)1, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08929eb8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int *piVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  iVar6 = 0;
  if ((iVar4 != 0) && (iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4), iVar5 == 3)) {
    iVar6 = iVar4;
  }
  if (iVar6 != 0) {
    FUN_088c5514(*puVar2,0x3e99999a,iVar6,0,*piVar3 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

