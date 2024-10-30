# isSoundFixBeat

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `isSoundFixBeat`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 27 00`
- **Assembly Address in Memory** : `0x894ba20`

## Parameters

- `(uint)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 27 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
isSoundFixBeat((int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894ba20(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  int iVar2;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Save::Get_Save_BaseAddr(1);
  iVar2 = return__0x1c(*(undefined4 *)(iVar2 + 0x50));
  *puVar1 = (uint)(*(char *)(iVar2 + 0xedac) != '\0');
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

