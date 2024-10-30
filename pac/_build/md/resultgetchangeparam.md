# resultGetChangeParam

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `resultGetChangeParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 18 00`
- **Assembly Address in Memory** : `0x891a64c`

## Parameters

- `(Undefined)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*
- `(Undefined)Var2` *(8 bytes)*
- `(Undefined)Var3` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891a64c(int param_1,undefined4 param_2)

{
  undefined4 uVar1;
  undefined4 uVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  int iVar5;
  
  uVar1 = Pac_Get_Param(param_2,0,1,4);
  uVar2 = Pac_Get_Param(param_2,1,1,4);
  uVar3 = Pac_Get_Param(param_2,2,1,4);
  uVar4 = Pac_Get_Param(param_2,3,1,4);
  iVar5 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x3c);
  (**(code **)(*(int *)(iVar5 + 4) + 0x40))(iVar5,uVar1,uVar2,uVar3,uVar4);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

