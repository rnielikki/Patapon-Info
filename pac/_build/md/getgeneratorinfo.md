# getGeneratorInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getGeneratorInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 db 00`
- **Assembly Address in Memory** : `0x892643c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 db 00 / 04 00 00 00 / 14 00 00 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
getGeneratorInfo((int *)iVar20, (int *)iVar1, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892643c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  *puVar2 = 0xffffffff;
  *puVar3 = 0xffffffff;
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar4 != 0) && (iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4), iVar5 == 3)) {
    *puVar2 = *(undefined4 *)(iVar4 + 0x1dc);
    *puVar3 = *(undefined4 *)(iVar4 + 0x1e0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

