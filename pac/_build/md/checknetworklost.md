# checkNetworkLost

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `checkNetworkLost`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 0e 01`
- **Assembly Address in Memory** : `0x8928ed0`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(uint)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 0e 01 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 02 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
checkNetworkLost((int)0, (int *)iVar2, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08928ed0(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  uint *puVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  uint uVar7;
  int iVar8;
  int iVar9;
  int iVar10;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (uint *)Pac_Get_Param(param_2,2,1,4);
  *puVar3 = 0;
  iVar8 = *piVar1;
  iVar10 = 0;
  if (iVar8 == 2) {
    iVar8 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*piVar2,1);
    if ((iVar8 != 0) && (iVar6 = (**(code **)(*(int *)(iVar8 + 4) + 0x34))(iVar8), iVar6 == 3)) {
      iVar10 = Is_HeroUnit(iVar8);
    }
  }
  else if (iVar8 == 1) {
    iVar8 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*piVar2);
    if ((iVar8 != 0) && (iVar6 = (**(code **)(*(int *)(iVar8 + 4) + 0x34))(iVar8), iVar6 == 9)) {
      iVar10 = iVar8;
    }
  }
  else if (iVar8 == 0) {
    iVar8 = *(int *)(param_1 + 0x10);
    if (iVar8 == 0) {
      iVar8 = 0;
    }
    else {
      if (iVar8 == 0) {
        iVar8 = 0;
      }
      iVar8 = *(int *)(iVar8 + 0xf8);
      if (iVar8 == 0) {
        iVar8 = 0;
      }
    }
    if (iVar8 != 0) {
      iVar6 = 0;
      do {
        iVar4 = FUN_088a8650(iVar8,iVar6);
        if (iVar4 != 0) {
          iVar9 = 0;
          do {
            iVar5 = FUN_088df588(iVar4,iVar9);
            if ((iVar5 != 0) && (*piVar2 == *(int *)(iVar5 + 0x188))) {
              iVar10 = Is_HeroUnit(iVar5);
            }
            iVar9 = iVar9 + 1;
          } while (iVar9 < 4);
        }
        iVar6 = iVar6 + 1;
      } while (iVar6 < 2);
    }
  }
  if (iVar10 != 0) {
    uVar7 = FUN_088b8d8c(iVar10);
    *puVar3 = uVar7 & 0xff;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

