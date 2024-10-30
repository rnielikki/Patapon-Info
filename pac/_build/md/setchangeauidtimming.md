# setChangeAUIDTimming

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setChangeAUIDTimming`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 18 00`
- **Assembly Address in Memory** : `0x89426a8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 19 18 00 / 04 00 00 00 / 40 00 00 00 / 10 00 00 00 / 00 00 80 3f```

Which is interpreted as:

```c
setChangeAUIDTimming((int *)iVar64, (float)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089426a8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
  }
  if (iVar3 != 0) {
    FUN_088d5cec(*puVar2,iVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

