# setGroupId (25170d00)

> *Other functions have the same name. Check the [Disambiguation page](./setGroupId.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setGroupId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 0d 00`
- **Assembly Address in Memory** : `0x89119b0`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 0d 00 / 08 00 00 00 / 5b 00 00 00 / 02 00 00 00 / ff ff ff ff```

Which is interpreted as:

```c
setGroupId(((global)int *)giVar91, (int)-1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089119b0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 != 0) {
      *(short *)(iVar3 + 0x84) = (short)*puVar2;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

