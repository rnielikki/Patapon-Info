# setEnableSeatLight

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setEnableSeatLight`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 11 00`
- **Assembly Address in Memory** : `0x8b4e1a0`

## Parameters

- `(uint)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4e1a0(int param_1,undefined4 param_2)

{
  uint *puVar1;
  int *piVar2;
  uint uVar3;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  uVar3 = *puVar1;
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) && (uVar3 < 4)) {
    *(bool *)(uVar3 + *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0xcdc4) + 0x29c0) =
         *piVar2 != 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

