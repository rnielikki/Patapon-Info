# receiveVersus03LastOneGoal

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `receiveVersus03LastOneGoal`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 c8 00`
- **Assembly Address in Memory** : `0x8924490`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 c8 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
receiveVersus03LastOneGoal((int *)iVar0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924490(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar1 = 0;
  *puVar2 = 0;
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if (iVar3 != 0) {
    if (*(char *)(*(int *)(iVar3 + 0x58) + 0x48) == '\0') {
      iVar3 = *(int *)(iVar3 + 0x58);
    }
    else {
      *puVar1 = 1;
      iVar3 = *(int *)(iVar3 + 0x58);
    }
    if (*(char *)(iVar3 + 0x49) != '\0') {
      *puVar2 = 1;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

