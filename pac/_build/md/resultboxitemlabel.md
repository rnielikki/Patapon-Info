# resultBoxItemLabel

Call specific instructions (chest item drop logic) when player goes hideout with chests. **This is called per chest.**

For detail, check [How To:Set Item Drops](./guide/how-to-set-item-drops.md).

This is part of the starting logic, which means it lies *before* [MissionTimmingScript](./setmissiontimmingscript.md).

## Code Information

- **Name**: `resultBoxItemLabel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 68 00`
- **Assembly Address in Memory** : `0x8920570`

## Parameters

- `(index)address` *(8 bytes)* : Address in the PAC instruction file.

## Example

Here is one example in hex:

```25 16 68 00 / 01 00 00 00 / f8 df 00 00```

Which is interpreted as:

```c
resultBoxItemLabel((index)57336)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920570(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  
  uVar1 = FUN_0883bc1c(param_2);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar3 = FUN_08a50110(1);
  FUN_08a50188(uVar3,uVar1,*puVar2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

