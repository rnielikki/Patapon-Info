# changeLanguage

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `changeLanguage`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 04 00`
- **Assembly Address in Memory** : `0x8949794`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08949794(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar3 = *puVar1;
  iVar2 = Save::Get_Save_BaseAddr(1);
  *(undefined4 *)(iVar2 + 0x20) = uVar3;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

