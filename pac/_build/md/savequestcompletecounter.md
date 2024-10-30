# saveQuestCompleteCounter

Reads quest complement counter address, but this does nothing. Use [getQuestComplementCounter](./getquestcompletecounter.md) to get quest complemente counter.

This is functionally identical to [loadQuestCompleteCounter](./loadquestcompletecounter.md).

## Code Information

- **Name**: `saveQuestCompleteCounter`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 39 00`
- **Assembly Address in Memory** : `0x894ce28`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894ce28(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = Save::Get_Save_BaseAddr(1);
  return__0x1c(*(undefined4 *)(iVar1 + 0x50));
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

