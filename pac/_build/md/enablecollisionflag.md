# enableCollisionFlag

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `enableCollisionFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 41 00`
- **Assembly Address in Memory** : `0x89155fc`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*
- `(int)Var4` *(8 bytes)*
- `(int)Var5` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 41 00 / 04 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
enableCollisionFlag((int *)iVar1, (int)0, (int)1, (int)1, (int)0, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089155fc(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  int *piVar5;
  int *piVar6;
  int iVar7;
  int iVar8;
  uint uVar9;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,4,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,5,1,4);
  if (*piVar1 != -1) {
    iVar7 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar7 == 0) {
      iVar7 = 0;
    }
    if (iVar7 != 0) {
      iVar8 = (**(code **)(*(int *)(iVar7 + 4) + 0x34))(iVar7);
      if (iVar8 == 10) {
        if (*piVar2 == 0) {
          FUN_088cbea0(iVar7,*piVar5 != 0,*piVar4 != 0,*piVar6 != 0,*piVar4 != 0);
          (**(code **)(*(int *)(iVar7 + 4) + 0x110))(iVar7,*piVar3 != 0);
          goto LAB_089157c0;
        }
        iVar7 = *(int *)(iVar7 + 0xd0);
      }
      else {
        iVar7 = *(int *)(iVar7 + 0xd0);
      }
      if ((iVar7 != 0) && (iVar7 = Set_Collision(iVar7 + 0xa0,*piVar2), iVar7 != 0)) {
        uVar9 = 0;
        if (*piVar4 == 0) {
          uVar9 = 10;
        }
        if (*piVar5 == 0) {
          uVar9 = uVar9 | 1;
          iVar8 = *piVar6;
        }
        else {
          iVar8 = *piVar6;
        }
        if (iVar8 == 0) {
          *(uint *)(iVar7 + 0x58) = uVar9 | 4;
        }
        else {
          *(uint *)(iVar7 + 0x58) = uVar9;
        }
        FUN_0886f280(iVar7,*piVar3 != 0);
      }
    }
  }
LAB_089157c0:
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

