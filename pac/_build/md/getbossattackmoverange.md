# getBossAttackMoveRange

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getBossAttackMoveRange`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 15 00`
- **Assembly Address in Memory** : `0x89b28ac`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 15 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getBossAttackMoveRange((int *)iVar0, (int)0, (float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b28ac(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar4 != 0) {
    uVar5 = (**(code **)(*(int *)(iVar4 + 0xc) + 0x98))(iVar4,*puVar2);
    *puVar3 = uVar5;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

