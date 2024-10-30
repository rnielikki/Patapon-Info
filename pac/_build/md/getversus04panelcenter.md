# getVersus04PanelCenter

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getVersus04PanelCenter`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 35 01`
- **Assembly Address in Memory** : `0x8925434`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(float)Var1` *(8 bytes)*
- `(float)Var2` *(8 bytes)*
- `(float)Var3` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08925434(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  float *pfVar2;
  float *pfVar3;
  float *pfVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  pfVar2 = (float *)Pac_Get_Param(param_2,1,1,4);
  pfVar3 = (float *)Pac_Get_Param(param_2,2,1,4);
  pfVar4 = (float *)Pac_Get_Param(param_2,3,1,4);
  *pfVar4 = *pfVar3 * 0.5 + *pfVar2 + *pfVar3 * (float)*piVar1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

