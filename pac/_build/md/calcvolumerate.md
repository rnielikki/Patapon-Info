# calcVolumeRate

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `calcVolumeRate`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0b 09 00`
- **Assembly Address in Memory** : `0x896fe60`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*
- `(Undefined)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 0b 09 00 / 20 00 00 00 / 00 00 00 00 / 20 00 00 00 / 04 00 00 00 / 20 00 00 00 / 05 00 00 00```

Which is interpreted as:

```c
calcVolumeRate((float *)fVar0, (float *)fVar4, (float *)fVar5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896fe60(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = Pac_Get_Param(param_2,1,1,4);
  uVar3 = Pac_Get_Param(param_2,2,1,4);
  FUN_088e7114(*puVar1,*(undefined4 *)(param_1 + 0x14),uVar2,uVar3);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

