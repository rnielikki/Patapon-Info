# resultLevelupCalacLabel

Call specific instructions when a unit **levels up**. This is called **per one level-up**. Usually this leads to [cmd_end](./cmd_end.md).

This is part of the starting logic, which means it lies *before* [MissionTimmingScript](./setmissiontimmingscript.md).

## Code Information

- **Name**: `resultLevelupCalacLabel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 ab 00`
- **Assembly Address in Memory** : `0x892322c`

## Parameters

- `(index)address` *(8 bytes)* : Address in PAC instruction file.

## Example

Here is one example in hex:

```25 16 ab 00 / 01 00 00 00 / cc c8 00 00```

Which is interpreted as:

```c
resultLevelupCalacLabel((index)51404)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892322c(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  undefined4 *puVar2;
  
  uVar1 = FUN_0883bc1c(param_2);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  func_0x08b41370(uVar1,*puVar2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

