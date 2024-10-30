# setActivityParam

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setActivityParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 33 00`
- **Assembly Address in Memory** : `0x89b41bc`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 33 00 / 04 00 00 00 / 14 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setActivityParam((int *)iVar20, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b41bc(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar3 != 0) {
    (**(code **)(*(int *)(iVar3 + 0xc) + 0x124))(iVar3,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

