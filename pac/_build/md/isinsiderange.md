# isInsideRange

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `isInsideRange`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 55 00`
- **Assembly Address in Memory** : `0x891f5a8`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*
- `(undefined4)Var5` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891f5a8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  int iVar7;
  int iVar8;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  *puVar6 = 0;
  if (*piVar1 == -1) {
    iVar7 = *(int *)(param_1 + 0x10);
    if (iVar7 == 0) {
      iVar7 = 0;
    }
    else {
      if (iVar7 == 0) {
        iVar7 = 0;
      }
      iVar7 = *(int *)(iVar7 + 0xf8);
      if (iVar7 == 0) {
        iVar7 = 0;
      }
    }
    if (((iVar7 != 0) && (iVar7 = FUN_088a8650(iVar7,0), iVar7 != 0)) &&
       (iVar7 = FUN_088e2800(*puVar2,*puVar3,*puVar4,*puVar5,iVar7), iVar7 != 0)) {
      *puVar6 = 1;
    }
  }
  else {
    iVar7 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*piVar1,1);
    if (iVar7 != 0) {
      iVar8 = (**(code **)(*(int *)(iVar7 + 4) + 0x34))(iVar7);
      if (iVar8 == 9) {
        iVar7 = FUN_088b8f90(*puVar2,*puVar3,*puVar4,*puVar5,iVar7);
        if (iVar7 != 0) {
          *puVar6 = 1;
        }
      }
      else if (iVar8 == 3) {
        iVar7 = FUN_088c6278(*puVar2,*puVar3,*puVar4,*puVar5,iVar7);
        if (iVar7 != 0) {
          *puVar6 = 1;
        }
      }
      else if ((iVar8 == 2) &&
              (iVar7 = FUN_088e2800(*puVar2,*puVar3,*puVar4,*puVar5,iVar7), iVar7 != 0)) {
        *puVar6 = 1;
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

