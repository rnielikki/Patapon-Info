# getVersus03Rank

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getVersus03Rank`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 33 01`
- **Assembly Address in Memory** : `0x8927fdc`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 33 01 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getVersus03Rank((int *)iVar0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08927fdc(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  char cVar3;
  int iVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  *piVar2 = -1;
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar4 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8), iVar4 != 0)) &&
     (iVar4 = *(int *)(iVar4 + 0x58), iVar4 != 0)) {
    iVar5 = *piVar1;
    if (iVar5 < 0) {
      cVar3 = -1;
    }
    else if (iVar5 < 8) {
      cVar3 = *(char *)(iVar5 + iVar4 + 0x4b);
    }
    else {
      cVar3 = -1;
    }
    *piVar2 = (int)cVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

