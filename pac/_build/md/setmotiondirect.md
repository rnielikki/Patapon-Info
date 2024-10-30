# setMotionDirect

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setMotionDirect`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 05 01`
- **Assembly Address in Memory** : `0x89283d4`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 05 01 / 08 00 00 00 / 68 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setMotionDirect(((global)int *)giVar104, (int)1, (int)1, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089283d4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  int iVar5;
  int iVar6;
  undefined4 uVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  iVar6 = *piVar2;
  uVar7 = 0xffffffff;
  if (iVar6 == 3) {
    uVar7 = 0x3a;
  }
  else if (iVar6 == 2) {
    uVar7 = 1;
  }
  else if (iVar6 == 1) {
    uVar7 = 6;
  }
  else if (iVar6 == 0) {
    uVar7 = 7;
  }
  if (iVar5 != 0) {
    iVar6 = (**(code **)(*(int *)(iVar5 + 4) + 0x34))(iVar5);
    if (iVar6 == 9) {
      FUN_088c2744(iVar5,uVar7,*piVar3 != 0,*piVar4 != 0);
    }
    else {
      iVar6 = (**(code **)(*(int *)(iVar5 + 4) + 0x34))(iVar5);
      if (iVar6 == 3) {
        FUN_088c6f78(iVar5,uVar7,*piVar3 != 0,*piVar4 != 0);
      }
      else {
        iVar6 = (**(code **)(*(int *)(iVar5 + 4) + 0x34))(iVar5);
        if (iVar6 == 2) {
          FUN_088e39c4(iVar5,uVar7,*piVar3 != 0,*piVar4 != 0);
        }
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

