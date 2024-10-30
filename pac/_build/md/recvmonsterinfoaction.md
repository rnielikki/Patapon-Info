# recvMonsterInfoAction

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `recvMonsterInfoAction`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 2c 00`
- **Assembly Address in Memory** : `0x89b3d48`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*
- `(Undefined)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 2c 00 / 04 00 00 00 / 14 00 00 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
recvMonsterInfoAction((int *)iVar20, (int *)iVar0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b3d48(undefined4 param_1,undefined4 param_2)

{
  undefined uVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  int iVar5;
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar3 = Pac_Get_Param(param_2,1,1,4);
  uVar4 = Pac_Get_Param(param_2,2,1,4);
  iVar5 = FUN_089b12c4(param_1,*puVar2);
  if (iVar5 != 0) {
    uVar1 = FUN_0896dca4(iVar5,uVar3,uVar4);
    FUN_0883c04c(param_2,uVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

