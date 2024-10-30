# recvMonsterInfoState

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `recvMonsterInfoState`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 2e 00`
- **Assembly Address in Memory** : `0x89b3e98`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 2e 00 / 04 00 00 00 / 14 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
recvMonsterInfoState((int *)iVar20, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b3e98(undefined4 param_1,undefined4 param_2)

{
  undefined uVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  int iVar4;
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar3 = Pac_Get_Param(param_2,1,1,4);
  iVar4 = FUN_089b12c4(param_1,*puVar2);
  if (iVar4 != 0) {
    uVar1 = FUN_0896dd08(iVar4,uVar3);
    FUN_0883c04c(param_2,uVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

