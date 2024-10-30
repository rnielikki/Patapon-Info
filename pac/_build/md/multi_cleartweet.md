# multi_clearTweet

Sets loading phase to -1.

## Code Information

- **Name**: `multi_clearTweet`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 32 00`
- **Assembly Address in Memory** : `0x894c99c`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894c99c(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  
  uVar1 = Save::Get_Save_BaseAddr(1);
  iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
  FUN_089d16bc(*(undefined4 *)(*(int *)(iVar2 + 100) + 0x18c));
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

