# setUnitMotionIndex

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setUnitMotionIndex`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 27 00`
- **Assembly Address in Memory** : `0x891bea8`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 27 00 / 04 00 00 00 / 04 00 00 00```

Which is interpreted as:

```c
setUnitMotionIndex((int *)iVar4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891bea8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 uVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = FUN_088a8650(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xf8),0);
  uVar2 = FUN_088df588(uVar2,0);
  iVar3 = FUN_088c5348(uVar2,0);
  if ((((iVar3 != 0) && (iVar3 = *(int *)(iVar3 + 200), iVar3 != 0)) &&
      (iVar5 = *piVar1, -1 < iVar5)) && (iVar4 = FUN_0888ead0(iVar3), iVar5 < iVar4)) {
    FUN_0888eaa8(iVar3,*piVar1,1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

