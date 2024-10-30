# setNetworkLogOutputType

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setNetworkLogOutputType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 0a 01`
- **Assembly Address in Memory** : `0x89289e8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089289e8(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Debug::Get_Log_Setting(1);
  FUN_0896df38(*(undefined4 *)(iVar2 + 0x4c),*puVar1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

