# setPushParam

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setPushParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 45 00`
- **Assembly Address in Memory** : `0x8915b0c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 45 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 02 00 00 00 / 02 00 00 00 / 0e 01 00 00```

Which is interpreted as:

```c
setPushParam((int *)iVar0, (int)2, (int)270)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08915b0c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar5 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar4 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  uVar3 = *puVar1;
  if (param_1 == 0) {
    iVar2 = 0;
  }
  else {
    iVar2 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),uVar5,1);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    else {
      iVar2 = *(int *)(iVar2 + 0xd0);
      if (iVar2 == 0) {
        iVar2 = 0;
      }
    }
  }
  if (iVar2 != 0) {
    FUN_088dd02c(iVar2,uVar4,uVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

