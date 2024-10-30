# killGeneratorGroup

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `killGeneratorGroup`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 17 00`
- **Assembly Address in Memory** : `0x89424f4`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 19 17 00 / 04 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 80 3f / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
killGeneratorGroup((int *)iVar0, (float)0, (float)1, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089424f4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int *piVar4;
  int iVar5;
  int iVar6;
  int iVar7;
  int iVar8;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar5 == 0) {
    iVar5 = 0;
  }
  else if (iVar5 == 0) {
    iVar5 = 0;
  }
  else {
    (**(code **)(*(int *)(iVar5 + 4) + 0x34))(iVar5);
  }
  iVar6 = *piVar4;
  if (iVar5 != 0) {
    iVar7 = 0;
    iVar8 = *(uint *)(iVar5 + 0x194) - (*(uint *)(iVar5 + 0x194) / 100000) % 10;
    iVar5 = *(int *)(param_1 + 0x10);
    while( true ) {
      iVar5 = FUN_088b4f2c(*(undefined4 *)(iVar5 + 0x108),iVar8);
      if (iVar5 != 0) {
        if (iVar6 == 0) {
          (**(code **)(*(int *)(iVar5 + 4) + 0x88))(*puVar2,*puVar3,iVar5);
        }
        else {
          (**(code **)(*(int *)(iVar5 + 4) + 0x8c))(*puVar2,*puVar3,iVar5);
        }
      }
      iVar7 = iVar7 + 1;
      iVar8 = iVar8 + 100000;
      if (7 < iVar7) break;
      iVar5 = *(int *)(param_1 + 0x10);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

