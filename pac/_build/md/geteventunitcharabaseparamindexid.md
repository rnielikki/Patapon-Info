# getEventUnitCharaBaseParamIndexId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getEventUnitCharaBaseParamIndexId`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 33 00`
- **Assembly Address in Memory** : `0x8b507b8`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 1c 33 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getEventUnitCharaBaseParamIndexId((int *)iVar0, (int)0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b507b8(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar4 = *piVar2;
  piVar2 = (int *)Pac_Get_Param(param_2,2,1,4);
  *piVar2 = 0;
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 != 0) {
    if (*piVar1 == 0) {
      iVar3 = *(int *)(iVar3 + 0x1c4) + 0x2d0;
    }
    else {
      iVar3 = *(int *)(iVar3 + 0x1c4) + 0x2b20;
    }
    iVar3 = iVar4 * 0x500 + iVar3;
    if (((iVar3 != -0x20) && (piVar1 = (int *)(iVar3 + 0x30), piVar1 != (int *)0x0)) &&
       (iVar3 = *piVar1, iVar3 != 0)) {
      *piVar2 = (int)*(short *)(*(int *)(iVar3 + 0x870) + 0x10);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

