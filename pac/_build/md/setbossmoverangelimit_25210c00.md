# setBossMoveRangeLimit (25210c00)

> *Other functions have the same name. Check the [Disambiguation page](./setBossMoveRangeLimit.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setBossMoveRangeLimit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 0c 00`
- **Assembly Address in Memory** : `0x89b2ba8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 0c 00 / 04 00 00 00 / 14 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setBossMoveRangeLimit((int *)iVar20, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b2ba8(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar3 != 0) {
    FUN_08977740(*puVar2,iVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

