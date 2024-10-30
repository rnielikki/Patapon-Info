# volume

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `volume`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0b 05 00`
- **Assembly Address in Memory** : `0x896fa68`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 0b 05 00 / 02 00 00 00 / 02 00 90 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 a0 40```

Which is interpreted as:

```c
volume((int)9437186, (float)0, (float)0, (float)5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896fa68(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  FUN_088eb2dc(*puVar3,*puVar4,*puVar2,*(int *)(param_1 + 0x14) + 0x60,*puVar1,1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

