# getPlayerData

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getPlayerData`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 12 00`
- **Assembly Address in Memory** : `0x894a5bc`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*
- `(Undefined)Var5` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 12 00 / 02 00 00 00 / 00 00 00 00 / 08 00 00 00 / 5c 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 02 00 00 00 / 02 00 00 00 / 01 00 00 00 / 08 00 00 00 / 5b 00 00 00```

Which is interpreted as:

```c
getPlayerData((int)0, ((global)int *)giVar92, (int)0, (int)2, (int)1, ((global)int *)giVar91)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894a5bc(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  undefined4 uVar6;
  undefined4 uVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar6 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar5 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  uVar4 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  uVar3 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  uVar7 = *puVar1;
  uVar2 = Pac_Get_Param(param_2,5,1,4);
  FUN_0894ad3c(param_1,0,uVar6,uVar5,uVar4,uVar3,uVar7,uVar2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

