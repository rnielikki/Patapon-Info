# getUnit_gamePlayerId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getUnit_gamePlayerId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 20 01`
- **Assembly Address in Memory** : `0x892a264`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 20 01 / 04 00 00 00 / 02 00 00 00 / 04 00 00 00 / 0f 00 00 00```

Which is interpreted as:

```c
getUnit_gamePlayerId((int *)iVar2, (int *)iVar15)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892a264(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  int iVar7;
  int iVar8;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0xf8);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if (iVar3 != 0) {
    iVar8 = 0;
    do {
      iVar4 = FUN_088a8650(iVar3,iVar8);
      if (iVar4 != 0) {
        iVar7 = 0;
        do {
          iVar5 = FUN_088df588(iVar4,iVar7);
          if (((iVar5 != 0) && (*piVar1 == *(int *)(iVar5 + 0x188))) &&
             (iVar6 = FUN_088c5348(iVar5,0), iVar6 != 0)) {
            iVar3 = FUN_088c5348(iVar5,0);
            *piVar2 = (int)*(short *)(iVar3 + 0x78);
            PAC::PAC_setCmdId(param_2,0);
            return;
          }
          iVar7 = iVar7 + 1;
        } while (iVar7 < 4);
      }
      iVar8 = iVar8 + 1;
    } while (iVar8 < 2);
  }
  *piVar2 = -1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

