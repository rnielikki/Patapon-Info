# getBossDisableAtkMove

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getBossDisableAtkMove`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 16 00`
- **Assembly Address in Memory** : `0x89b2968`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 16 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
getBossDisableAtkMove((int *)iVar1, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b2968(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar3 != 0) {
    *puVar2 = (uint)*(byte *)(iVar3 + 0x330);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

