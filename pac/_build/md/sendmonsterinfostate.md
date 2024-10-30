# sendMonsterInfoState

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `sendMonsterInfoState`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 2d 00`
- **Assembly Address in Memory** : `0x89b3e08`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 2d 00 / 04 00 00 00 / 14 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
sendMonsterInfoState((int *)iVar20, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b3e08(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = FUN_089b12c4(param_1,*puVar1);
  if (iVar3 != 0) {
    FUN_0896dcc0(iVar3,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

