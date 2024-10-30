# obstacleGetMoveRatio

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `obstacleGetMoveRatio`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 37 00`
- **Assembly Address in Memory** : `0x89b43ec`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 37 00 / 04 00 00 00 / 14 00 00 00 / 20 00 00 00 / 2c 00 00 00 / 40 00 00 00 / ff 01 00 00```

Which is interpreted as:

```c
obstacleGetMoveRatio((int *)iVar20, (float *)fVar44, ((global)float *)gfVar511)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b43ec(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  *puVar2 = 0;
  iVar4 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar4 != 0) {
    uVar5 = FUN_0897ef4c(iVar4,1);
    *puVar2 = uVar5;
    *puVar3 = *(undefined4 *)(iVar4 + 0x90);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

