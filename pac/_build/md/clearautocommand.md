# clearAutoCommand

Stops all command immediately sent from [setAutoCommand](./setautocommand.md) or [startAutoCommandKey](./startautocommandkey.md), making drum input possible.

## Code Information

- **Name**: `clearAutoCommand`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 0e 00`
- **Assembly Address in Memory** : `0x8970a18`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 0c 0e 00```

Which is interpreted as:

```c
clearAutoCommand()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970a18(int param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar1 != 0) {
    func_0x08b74618(iVar1 + 8);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

