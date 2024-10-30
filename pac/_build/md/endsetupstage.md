# endSetupStage

Ends/Finalises stage setup. This can be paired with [startSetupStage](./startsetupstage.md), or be called without pairing to completely end the stage setup.

More information in [How To: Setup Stages](./guide/how-to-setup-stages.md).

## Code Information

- **Name**: `endSetupStage`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 5c 00`
- **Assembly Address in Memory** : `0x891fdc4`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 5c 00```

Which is interpreted as:

```c
endSetupStage()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891fdc4(int param_1,undefined4 param_2)

{
  FUN_088b03fc(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x118));
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

