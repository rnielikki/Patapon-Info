# setMarchWayTypeReverce

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setMarchWayTypeReverce`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 64 00`
- **Assembly Address in Memory** : `0x89203fc`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089203fc(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *piVar1;
  iVar3 = Save::Get_Save_BaseAddr(1);
  *(uint *)(*(int *)(iVar3 + 0x58) + 0x30) = (uint)(iVar2 == 0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

