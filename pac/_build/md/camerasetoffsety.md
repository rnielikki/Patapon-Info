# cameraSetOffsetY

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cameraSetOffsetY`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 91 00`
- **Assembly Address in Memory** : `0x8921f10`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 91 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
cameraSetOffsetY((float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08921f10(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0xd8);
  if (iVar3 != 0) {
    uVar2 = (**(code **)(*(int *)(iVar3 + 4) + 0x24))();
    FUN_088499e4(0,*puVar1,uVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

