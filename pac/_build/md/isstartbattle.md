# isStartBattle

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `isStartBattle`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 6d 00`
- **Assembly Address in Memory** : `0x892078c`

## Parameters

- `(uint)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892078c(int param_1,undefined4 param_2)

{
  uint *puVar1;
  int iVar2;
  uint uVar3;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 != 0) {
    if (*(char *)(iVar2 + 0x4a) == '\0') {
      uVar3 = 0;
    }
    else {
      uVar3 = *(char *)(iVar2 + 0x40) != '\0' ^ 1;
    }
    *puVar1 = uVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

