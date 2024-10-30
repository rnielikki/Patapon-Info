# setEnableNetwork

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setEnableNetwork`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 19 00`
- **Assembly Address in Memory** : `0x894276c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 19 19 00 / 08 00 00 00 / 40 01 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setEnableNetwork(((global)int *)giVar320, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894276c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
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
  if ((iVar3 != 0) && (*(int *)(iVar3 + 0x194) != 0)) {
    *(byte *)(iVar3 + 0x1d5) = *(byte *)(iVar3 + 0x1d5) & 0xfe | *piVar2 == 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

