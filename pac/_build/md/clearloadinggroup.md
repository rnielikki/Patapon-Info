# clearLoadingGroup

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `clearLoadingGroup`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 0c 00`
- **Assembly Address in Memory** : `0x8949074`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 09 0c 00 / 02 00 00 00 / 0b 00 00 00```

Which is interpreted as:

```c
clearLoadingGroup((int)11)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08949074(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = FUN_0884a440(1);
  FUN_0884b590(uVar2,*puVar1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

