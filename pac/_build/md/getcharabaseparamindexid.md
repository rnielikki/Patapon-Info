# getCharaBaseParamIndexId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getCharaBaseParamIndexId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 2e 01`
- **Assembly Address in Memory** : `0x892a97c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 2e 01 / 08 00 00 00 / 5b 00 00 00 / 08 00 00 00 / 5c 00 00 00```

Which is interpreted as:

```c
getCharaBaseParamIndexId(((global)int *)giVar91, ((global)int *)giVar92)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892a97c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  *piVar2 = 0;
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) &&
     (iVar3 != 0)) {
    *piVar2 = (int)*(short *)(*(int *)(iVar3 + 0x870) + 0x10);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

