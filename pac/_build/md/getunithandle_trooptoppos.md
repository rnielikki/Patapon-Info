# getUnitHandle_TroopTopPos

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getUnitHandle_TroopTopPos`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 f0 00`
- **Assembly Address in Memory** : `0x8926b20`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 f0 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getUnitHandle_TroopTopPos((int *)iVar0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08926b20(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  *piVar1 = -1;
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
  if ((iVar3 != 0) && (iVar3 = FUN_088a8650(iVar3,0), iVar3 != 0)) {
    if (*piVar2 == 0) {
      iVar3 = FUN_088e21c8(iVar3);
      if (iVar3 != 0) {
        *piVar1 = (int)*(short *)(iVar3 + 0x78);
      }
    }
    else {
      iVar3 = FUN_088e2234(iVar3);
      if (iVar3 != 0) {
        *piVar1 = (int)*(short *)(iVar3 + 0x78);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

