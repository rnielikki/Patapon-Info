# setPosition

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

Might not be useful, this is **not** object positioning.

## Code Information

- **Name**: `setPosition`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 10 00`
- **Assembly Address in Memory** : `0x892e1e0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 03 10 00 / 10 00 00 00 / 00 00 70 43 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setPosition((float)240, (float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892e1e0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 uVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x2c);
  if (iVar3 != 0) {
    uVar4 = *puVar2;
    *(undefined4 *)(iVar3 + 0x170) = *puVar1;
    *(undefined4 *)(iVar3 + 0x174) = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

