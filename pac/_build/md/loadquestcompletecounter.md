# loadQuestCompleteCounter

Reads quest complement counter address, but this does nothing. Use [incQuestComplementCounter](./incquestcompletecounter.md) to increase quest complement counter.

This is functionally identical to [saveQuestCompleteCounter](./savequestcompletecounter.md).

## Code Information

- **Name**: `loadQuestCompleteCounter`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 3a 00`
- **Assembly Address in Memory** : `0x894ce64`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894ce64(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = Save::Get_Save_BaseAddr(1);
  return__0x1c(*(undefined4 *)(iVar1 + 0x50));
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

