# setEnableAbnormalWhole

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setEnableAbnormalWhole`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 24 00`
- **Assembly Address in Memory** : `0x89b370c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 24 00 / 04 00 00 00 / 14 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setEnableAbnormalWhole((int *)iVar20, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b370c(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar3 != 0) {
    *(bool *)(iVar3 + 0x89) = *piVar2 != 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

