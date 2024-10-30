# resultLevelupCalacGet

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `resultLevelupCalacGet`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 ac 00`
- **Assembly Address in Memory** : `0x892328c`

## Parameters

- `(Undefined)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*
- `(Undefined)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892328c(int param_1,undefined4 param_2)

{
  undefined4 uVar1;
  undefined4 uVar2;
  undefined4 uVar3;
  int iVar4;
  
  uVar1 = Pac_Get_Param(param_2,0,1,4);
  uVar2 = Pac_Get_Param(param_2,1,1,4);
  uVar3 = Pac_Get_Param(param_2,1,1,4);
  iVar4 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x3c);
  if (iVar4 != 0) {
    func_0x08b41388(*(undefined4 *)(iVar4 + 0x528),uVar1,uVar2,uVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

