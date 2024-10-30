# setRenderNoFlip

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setRenderNoFlip`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 21 00`
- **Assembly Address in Memory** : `0x8942da8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 19 21 00 / 08 00 00 00 / 7f 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setRenderNoFlip(((global)int *)giVar127, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08942da8(int param_1,undefined4 param_2)

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
  if (iVar3 != 0) {
    *(byte *)(iVar3 + 0x1d5) = *(byte *)(iVar3 + 0x1d5) & 0x7f | (*piVar2 != 0) << 7;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

