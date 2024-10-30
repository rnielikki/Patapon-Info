# getVersus02shootingMissileCount

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getVersus02shootingMissileCount`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 26 01`
- **Assembly Address in Memory** : `0x8927778`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*
- `(int)Var4` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 26 01 / 02 00 00 00 / 03 00 00 00 / 02 00 00 00 / 4c 04 00 00 / 02 00 00 00 / 7e 04 00 00 / 02 00 00 00 / 0a 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getVersus02shootingMissileCount((int)3, (int)1100, (int)1150, (int)10, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08927778(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  int *piVar5;
  int iVar6;
  int iVar7;
  int iVar8;
  int iVar9;
  int iVar10;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,4,1,4);
  iVar6 = *(int *)(param_1 + 0x10);
  iVar9 = *piVar4;
  iVar10 = 0;
  if (iVar6 == 0) {
    iVar6 = 0;
  }
  else {
    if (iVar6 == 0) {
      iVar6 = 0;
    }
    iVar6 = *(int *)(iVar6 + 0x108);
    if (iVar6 == 0) {
      iVar6 = 0;
    }
  }
  if (iVar6 != 0) {
    if (*piVar1 == 1) {
      iVar7 = *piVar1;
    }
    else {
      iVar7 = 0;
      if (0 < iVar9) {
        iVar8 = *piVar2;
        while( true ) {
          iVar8 = FUN_088b4f2c(iVar6,iVar7 + iVar8);
          if (((iVar8 != 0) && (*(char *)(iVar8 + 0x9c) != '\0')) &&
             (iVar8 = FUN_088ce294(iVar8,0), iVar8 == 1)) {
            iVar10 = iVar10 + 1;
          }
          iVar7 = iVar7 + 1;
          if (iVar9 <= iVar7) break;
          iVar8 = *piVar2;
        }
      }
      iVar7 = *piVar1;
    }
    if ((iVar7 != 0) && (iVar7 = 0, 0 < iVar9)) {
      iVar8 = *piVar3;
      while( true ) {
        iVar8 = FUN_088b4f2c(iVar6,iVar7 + iVar8);
        if (((iVar8 != 0) && (*(char *)(iVar8 + 0x9c) != '\0')) &&
           (iVar8 = FUN_088ce294(iVar8,0), iVar8 == 1)) {
          iVar10 = iVar10 + 1;
        }
        iVar7 = iVar7 + 1;
        if (iVar9 <= iVar7) break;
        iVar8 = *piVar3;
      }
    }
  }
  *piVar5 = iVar10;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

