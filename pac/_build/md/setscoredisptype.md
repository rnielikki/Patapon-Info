# setScoreDispType

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setScoreDispType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 10 01`
- **Assembly Address in Memory** : `0x8929178`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 10 01 / 02 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
setScoreDispType((int)2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08929178(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar3 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x58);
  if (iVar3 != 0) {
    iVar2 = *piVar1;
    if (iVar2 == 0) {
      *(undefined4 *)(iVar3 + 0x404) = 0;
    }
    else if (iVar2 == 1) {
      *(undefined4 *)(iVar3 + 0x404) = 1;
    }
    else if (iVar2 == 2) {
      *(undefined4 *)(iVar3 + 0x404) = 2;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

