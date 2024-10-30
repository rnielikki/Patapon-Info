# setUserScript

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setUserScript`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 0f 00`
- **Assembly Address in Memory** : `0x8941e14`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(4 bytes)*

## Example

Here is one example in hex:

```25 19 0f 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00 / ac 5f 07 00```

Which is interpreted as:

```c
setUserScript((int *)iVar0, (int *)iVar1, 0x75fac)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08941e14(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,0,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else if (iVar4 == 0) {
    iVar4 = 0;
  }
  else {
    (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
  }
  if (iVar4 != 0) {
    FUN_088cade0(iVar4,*puVar2,*puVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

