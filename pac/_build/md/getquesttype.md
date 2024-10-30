# getQuestType

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getQuestType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 00 01`
- **Assembly Address in Memory** : `0x89280f8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 00 01 / 04 00 00 00 / 33 00 00 00```

Which is interpreted as:

```c
getQuestType((int *)iVar51)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089280f8(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Get_Some_Flag(1);
  *puVar1 = *(undefined4 *)(*(int *)(iVar2 + 0x44) + 0x54c);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

