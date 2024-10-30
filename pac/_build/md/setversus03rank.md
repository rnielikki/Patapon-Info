# setVersus03Rank

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setVersus03Rank`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 32 01`
- **Assembly Address in Memory** : `0x8927f40`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 32 01 / 04 00 00 00 / 01 00 00 00 / 08 00 00 00 / 9c 00 00 00```

Which is interpreted as:

```c
setVersus03Rank((int *)iVar1, ((global)int *)giVar156)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08927f40(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8), iVar3 != 0)) &&
     (iVar3 = *(int *)(iVar3 + 0x58), iVar3 != 0)) {
    FUN_089efa64(iVar3,*puVar1,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

