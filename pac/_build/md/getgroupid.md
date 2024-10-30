# getGroupId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getGroupId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 10 0a 00`
- **Assembly Address in Memory** : `0x890a2e0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 10 0a 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getGroupId((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0890a2e0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0xffffffff;
  if (*(int *)(param_1 + 0x10) != 0) {
    *puVar1 = *(undefined4 *)(*(int *)(param_1 + 0x10) + 0x4fc);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

