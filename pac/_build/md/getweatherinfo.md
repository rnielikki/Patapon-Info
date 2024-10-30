# getWeatherInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getWeatherInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 12 09 00`
- **Assembly Address in Memory** : `0x8a1d37c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08a1d37c(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Get_Some_Flag(1);
  iVar3 = *(int *)(iVar3 + 0x44);
  *puVar1 = *(undefined4 *)(iVar3 + 0x77c);
  *puVar2 = *(undefined4 *)(iVar3 + 0x780);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

