# resetAttackUniqueId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `resetAttackUniqueId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 19 00`
- **Assembly Address in Memory** : `0x89125c0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 19 00 / 04 00 00 00 / 40 00 00 00```

Which is interpreted as:

```c
resetAttackUniqueId((int *)iVar64)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089125c0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if (param_1 == 0) {
    iVar3 = 0;
  }
  else {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      iVar3 = *(int *)(iVar3 + 200);
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    uVar2 = FUN_08875ca8();
    *(undefined4 *)(iVar3 + 0x100) = uVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

