# checkRangePriority_isInside

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `checkRangePriority_isInside`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 22 01`
- **Assembly Address in Memory** : `0x892a470`

## Parameters

- `(float)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892a470(int param_1,undefined4 param_2)

{
  float *pfVar1;
  int iVar2;
  undefined4 uVar3;
  
  pfVar1 = (float *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x118);
  if (*(char *)(iVar2 + 0x864c) == '\0') {
    uVar3 = 0;
  }
  else if ((*pfVar1 <= *(float *)(iVar2 + 0x8650)) || (*(float *)(iVar2 + 0x8654) <= *pfVar1)) {
    uVar3 = 0;
  }
  else {
    uVar3 = 1;
  }
  FUN_0883c04c(param_2,uVar3);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

