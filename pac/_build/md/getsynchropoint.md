# getSynchroPoint

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getSynchroPoint`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 11 00`
- **Assembly Address in Memory** : `0x8970b6c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 0c 11 00 / 04 00 00 00 / 0c 00 00 00```

Which is interpreted as:

```c
getSynchroPoint((int *)iVar12)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970b6c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  *puVar1 = 0;
  *puVar1 = 0;
  if (iVar2 != 0) {
    *puVar1 = *(undefined4 *)(iVar2 + 0x6b4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

