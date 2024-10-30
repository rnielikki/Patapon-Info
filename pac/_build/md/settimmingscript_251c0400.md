# setTimmingScript (251c0400)

> *Other functions have the same name. Check the [Disambiguation page](./setTimmingScript.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setTimmingScript`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 04 00`
- **Assembly Address in Memory** : `0x8b4d3a0`

## Parameters

- `(uint)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 1c 04 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00 / 01 00 00 00 / 70 03 00 00```

Which is interpreted as:

```c
setTimmingScript((int)0, (int *)iVar0, (index)880)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4d3a0(int param_1,undefined4 param_2)

{
  uint *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 uVar4;
  undefined4 *puVar5;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    if (*puVar1 < 0xf) {
      puVar5 = (undefined4 *)(*(int *)(param_1 + 0x10) + 0x94 + *puVar1 * 8);
    }
    else {
      puVar5 = (undefined4 *)0x0;
    }
    uVar4 = *puVar3;
    *puVar5 = *puVar2;
    puVar5[1] = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

