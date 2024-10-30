# sendVersusGoal

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `sendVersusGoal`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 c2 00`
- **Assembly Address in Memory** : `0x8924044`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 c2 00 / 08 00 00 00 / 64 00 00 00```

Which is interpreted as:

```c
sendVersusGoal(((global)int *)giVar100)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924044(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  FUN_089ef914(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2d8) + 0x58),*puVar1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

