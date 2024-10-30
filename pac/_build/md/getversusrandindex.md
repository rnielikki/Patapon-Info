# getVersusRandIndex

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getVersusRandIndex`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 ef 00`
- **Assembly Address in Memory** : `0x892531c`

## Parameters

- `(int...)Vars0` *(>= 8 bytes)*

`...` means any amounts of parameter.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892531c(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  uint uVar3;
  uint uVar4;
  uint uVar5;
  int **ppiVar6;
  int iVar7;
  int *local_20 [8];
  
  iVar7 = 0;
  ppiVar6 = local_20;
  do {
    piVar1 = (int *)Pac_Get_Param(param_2,iVar7,1,4);
    *ppiVar6 = piVar1;
    *piVar1 = -1;
    iVar7 = iVar7 + 1;
    ppiVar6 = ppiVar6 + 1;
  } while (iVar7 < 8);
  piVar1 = (int *)Pac_Get_Param(param_2,8,1,4);
  iVar7 = 0;
  do {
    iVar2 = zero_if_08aabe38_is_zero(1);
    uVar3 = Util::Random::Get_Rand_Value(iVar2 + 0x9c8);
    iVar2 = 0;
    uVar5 = uVar3 % 9;
    while( true ) {
      uVar4 = uVar5 & 7;
      if (((int)uVar5 < 0) && (uVar4 != 0)) {
        uVar4 = uVar4 - 8;
      }
      if (*local_20[uVar4] == -1) break;
      iVar2 = iVar2 + 1;
      if (7 < iVar2) goto LAB_08925400;
      uVar5 = uVar3 % 9 + iVar2;
    }
    iVar2 = iVar7;
    if (iVar7 == *piVar1) {
      iVar2 = 8;
    }
    *local_20[uVar4] = iVar2;
LAB_08925400:
    iVar7 = iVar7 + 1;
    if (7 < iVar7) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
  } while( true );
}
```

