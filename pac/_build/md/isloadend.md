# isLoadEnd

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `isLoadEnd`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 6f 00`
- **Assembly Address in Memory** : `0x8920870`

## Parameters

- `(uint)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920870(int param_1,undefined4 param_2)

{
  uint *puVar1;
  int iVar2;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 != 0) {
    if (*(int *)(iVar2 + 0x2b8) == 0) {
      *puVar1 = (uint)*(byte *)(iVar2 + 0x4c);
    }
    else {
      *puVar1 = 0 < *(int *)(*(int *)(iVar2 + 0x2b8) + 0x68) ^ 1;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

