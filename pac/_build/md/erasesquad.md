# eraseSquad

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `eraseSquad`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 46 00`
- **Assembly Address in Memory** : `0x891e23c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 46 00 / 04 00 00 00 / 14 00 00 00```

Which is interpreted as:

```c
eraseSquad((int *)iVar20)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891e23c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar2 != 0) && (iVar3 = (**(code **)(*(int *)(iVar2 + 4) + 0x34))(iVar2), iVar3 == 3)) {
    FUN_088c40f0(iVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

