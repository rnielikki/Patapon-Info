# getUnitMotionIndex

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getUnitMotionIndex`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 26 00`
- **Assembly Address in Memory** : `0x891be1c`

## Parameters

- `(uint)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 26 00 / 04 00 00 00 / 04 00 00 00```

Which is interpreted as:

```c
getUnitMotionIndex((int *)iVar4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891be1c(int param_1,undefined4 param_2)

{
  uint *puVar1;
  undefined4 uVar2;
  int iVar3;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = FUN_088a8650(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xf8),0);
  uVar2 = FUN_088df588(uVar2,0);
  iVar3 = FUN_088c5348(uVar2,0);
  if (iVar3 != 0) {
    *puVar1 = (uint)*(ushort *)(*(int *)(iVar3 + 200) + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

